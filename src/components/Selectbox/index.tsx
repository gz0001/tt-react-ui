// Components:
import * as React from 'react'
import cx from 'classnames'
import posed, { PoseGroup } from 'react-pose'
import { createState } from '../../utils/createState'

// ================================================================================================

// Props:
export interface Option {
  label: string
  value: string | number
  iconEnd?: React.ReactNode
  iconStart?: React.ReactNode
}

export type Selection = string | number | (string | number)[]

export interface SelectboxProps {
  arrow?: React.ReactNode
  className?: string
  id?: string
  iconEnd?: React.ReactNode
  iconStart?: React.ReactNode
  label?: React.ReactNode
  material?: boolean
  multiple?: boolean
  multipleSave?: string
  name?: string
  /**set only true if multiple === false */
  native?: boolean
  onSelect: (selection: Selection) => void
  options: Option[]
  selection?: Selection
  style?: React.CSSProperties
  text?: string
}
// state:
type State = {
  open: boolean
  selIndex: number
}

// ================================================================================================

const keyCode = {
  ESCAPE: 27,
  ENTER: 13,
  UP: 38,
  DOWN: 40
}

const AnimatedList = posed.div({
  preEnter: {
    opacity: 0
  },
  enter: {
    delayChildren: 100,
    opacity: 1,
    staggerChildren: 50
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 250
    }
  }
})

const AnimatedListItem = posed.div({
  preEnter: {
    opacity: 0,
    x: '20%'
  },
  enter: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0
  }
})

export const Selectbox: React.FunctionComponent<SelectboxProps> = React.memo(props => {
  const {
    arrow,
    className,
    id,
    label,
    material,
    multiple,
    multipleSave,
    native,
    name,
    onSelect,
    options,
    selection,
    style,
    text = 'base'
  } = props

  let value: string = null

  if (multiple && selection) {
    const selected = options.filter(option =>
      (selection as (string | number)[]).includes(option.value)
    )
    value = selected.length === 0 ? null : selected.map(sel => sel.label).join(', ')
  } else {
    const selected = options.find(option => option.value === selection)
    value = selected ? selected.label : null
  }

  // Hooks:
  const [state, setState] = createState<State>({
    open: false,
    selIndex: -1
  })

  const { open, selIndex } = state

  const selectContainer = React.useRef(null)
  const listContainer = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [open])

  // Handlers:
  const toogleOpen = () => {
    setState({ open: !open, selIndex: -1 })
  }

  const handleClickOutSide = (event: MouseEvent) => {
    try {
      // @ts-ignore
      !(event.target.className.indexOf('Selectbox') > -1) && open && toogleOpen()
    } catch (error) {
      open && toogleOpen()
    }
  }

  const handleSelect = (option: Option) => {
    if (multiple) {
      if (selection) {
        const selected = [...(selection as (string | number)[])]
        const index = selected.findIndex(sel => option.value === sel)
        index > -1 ? selected.splice(index, 1) : selected.push(option.value)
        onSelect(selected)
      } else {
        onSelect([option.value])
      }
    } else {
      onSelect(option.value)
      toogleOpen()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const code: number = e.keyCode ? e.keyCode : e.which
    switch (code) {
      case keyCode.ESCAPE:
        setState({ open: false, selIndex: -1 })
        e.stopPropagation()
        break
      case keyCode.ENTER:
        multiple && open && selIndex > -1 ? handleSelect(options[selIndex]) : toogleOpen()
        break
      case keyCode.DOWN:
      case keyCode.UP:
        open ? handleChangeSelect(e.keyCode) : setState({ open: true })
        break
      default:
        break
    }
    for (let key in keyCode) {
      if (keyCode[key] === e.keyCode && selectContainer) {
        selectContainer.current.focus()
        e.preventDefault()
      }
    }
  }

  const handleChangeSelect = (key: number) => {
    let curIndex = 0
    let up = true
    if (multiple) {
      if (selIndex > -1) {
        curIndex = selIndex
      } else {
        setState({ selIndex: 0 })
        return
      }
    } else {
      curIndex = options.findIndex(option => option.value === selection)
    }

    if (key === keyCode.DOWN) {
      curIndex < options.length - 1 ? curIndex++ : curIndex
      up = false
    } else {
      curIndex > 0 ? curIndex-- : curIndex
    }
    multiple ? setState({ selIndex: curIndex }) : onSelect(options[curIndex].value)
    handleListScroll(curIndex, up)
  }

  const handleListScroll = (index: number, up: boolean) => {
    if (listContainer.current) {
      const { top: listTop, bottom: listBottom } = listContainer.current.getBoundingClientRect()
      const { top: rowTop, bottom: rowBottom } = listContainer.current.childNodes[
        index
      ].getBoundingClientRect()

      // Check row inside list container view
      if (rowTop < listTop || rowBottom > listBottom) {
        listContainer.current.childNodes[index].scrollIntoView(up)
      }
    }
  }

  // Render:

  if (native && !multiple) {
    return (
      <div
        className={cx(
          `Selectbox native relative w-full hover:cursor-pointer `,
          material && 'material',
          open && 'focus',
          className && className
        )}
        style={style}
      >
        {arrow ? (
          arrow
        ) : (
          <div
            className={cx('Selectbox-arrow absolute w-3 h-3 border-black  border-b-2 border-r-2')}
          />
        )}
        <label
          className={cx(
            `Selectbox-label absolute transition`,
            selection ? 'text-xs populated' : 'text-base'
          )}
          htmlFor={id}
        >
          {label}
        </label>

        <select
          className={cx('Selectbox-select w-full focus:outline-none')}
          id={id}
          name={name}
          value={selection as string | number}
          onFocus={toogleOpen}
          onBlur={toogleOpen}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onSelect(event.target.value)}
        >
          <option />
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div
      className={cx(
        `Selectbox relative w-full overflow-y-visible hover:cursor-pointer focus:outline-none transition`,
        material && 'material',
        open && 'focus',
        className && className
      )}
      id={id}
      tabIndex={0}
      ref={selectContainer}
      style={style}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cx(
          `Selectbox-trigger relative flex content-between items-center w-full h-full focus:outline-none`
        )}
        onClick={toogleOpen}
      >
        <label
          className={cx(
            `Selectbox-label absolute pin-left transition`,
            value || open ? 'text-xs populated' : 'text-base'
          )}
        >
          {label}
        </label>
        <div className={cx(`Selectbox-value relative w-full text-left truncate`)}>
          <span className={cx(`Selectbox-content text-${text}`)}>{value ? value : '\xa0'}</span>
        </div>
        <div className="Selectbox-icon ml-auto transition">
          {arrow ? (
            arrow
          ) : (
            <div
              className={cx(
                'Selectbox-arrow w-3 h-3 border-black  border-b-2 border-r-2 transition',
                open ? 'rotate-225' : 'rotate-45',
                material && 'mr-1'
              )}
            />
          )}
        </div>
      </button>

      <PoseGroup preEnterPose="preEnter">
        {open && (
          <AnimatedList
            className={cx(`Selectbox-list w-full absolute pin-b pin-l overflow-y-auto z-10`)}
            key="list"
            ref={listContainer}
            role="listbox"
          >
            {options.map((option: Option, index: number) => {
              let isActive: boolean = false
              if (multiple && selection) {
                isActive = (selection as (string | number)[]).includes(option.value)
              } else {
                isActive = selection === option.value
              }

              const ListItem = index < 6 ? AnimatedListItem : 'button'

              return (
                <ListItem
                  aria-selected={isActive}
                  className={cx(
                    `Selectbox-list-item flex items-center w-full focus:outline-none`,
                    isActive && 'active',
                    index === selIndex && 'selecting'
                  )}
                  key={option.label}
                  onClick={() => handleSelect(option)}
                  role="option"
                >
                  {option.iconStart && option.iconStart}
                  {multiple && <div className={cx('Selectbox-list-item-checkbox relative mr-2')} />}
                  <span className={cx(`Selectbox-list-item-label`)}>{option.label}</span>
                  {option.iconEnd && option.iconEnd}
                </ListItem>
              )
            })}
          </AnimatedList>
        )}
      </PoseGroup>

      <PoseGroup preEnterPose="preEnter">
        {multiple && open && (
          <AnimatedList
            className={cx('Selectbox-list-submitWrapper w-full absolute pin-b pin-l')}
            key="selectbox-submit-wrapper"
          >
            <button
              className={cx(
                `Selectbox-list-submit absolute pin-b pin-l flex items-center justify-center w-full px-4 focus:outline-none`
              )}
              key="selectbox-submit"
              onClick={toogleOpen}
            >
              {multipleSave}
            </button>
          </AnimatedList>
        )}
      </PoseGroup>
    </div>
  )
})

Selectbox.defaultProps = {
  label: '',
  multipleSave: 'Übernehmen'
}
