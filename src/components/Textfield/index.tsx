// Components:
import * as React from 'react'
import cx from 'classnames'
import posed, { PoseGroup } from 'react-pose'
import { easing, tween } from 'popmotion'
import { createState } from '../../utils/createState'

// ================================================================================================

// Default timing:
const animateInTime = 200
const animateOutTime = 200

// Default animations:
const preEnterList = {
  y: '100%',
  opacity: 0
}

const enterList = {
  y: '100%',
  opacity: 1,
  delayChildren: animateInTime / 2,
  staggerChildren: 50,
  transition: (props: any) => {
    if (props.keys === 'opacity') {
      return tween({
        ...props,
        duration: animateInTime,
        ease: easing.linear
      })
    } else {
      return tween({
        ...props,
        duration: animateInTime,
        ease: easing.easeOut
      })
    }
  }
}

const exitList = {
  y: '100%',
  opacity: 0,
  delay: 200,
  staggerChildren: 50,
  transition: (props: any) => {
    if (props.keys === 'opacity') {
      return tween({
        ...props,
        duration: animateOutTime,
        ease: easing.linear
      })
    } else {
      return tween({
        ...props,
        duration: animateOutTime,
        ease: easing.easeOut
      })
    }
  }
}

const preEnterItem = {
  opacity: 0,
  y: '-20%'
}

const enterItem = {
  opacity: 1,
  y: 0
}

const exitItem = {
  opacity: 0,
  y: '20%'
}

const AnimatedList = posed.div({ preEnter: preEnterList, enter: enterList, exit: exitList })
const AnimatedListItem = posed.button({ preEnter: preEnterItem, enter: enterItem, exit: exitItem })

// Props:

export interface TextfieldProps {
  autocomplete?: string[]
  autocompleteFrom?: number
  center?: boolean
  className?: string
  classNameInput?: string
  iconEnd?: React.ReactNode
  iconStart?: React.ReactNode
  id?: string
  inputProps?: React.HTMLProps<HTMLInputElement>
  label?: string
  material?: boolean
  onEnter?: () => void
  onInput: (text: string) => void
  placeholder?: string
  type?: string
  value: string
  style?: React.CSSProperties
}

export const Textfield: React.FunctionComponent<TextfieldProps> = React.memo(props => {
  const {
    autocomplete,
    autocompleteFrom,
    className,
    classNameInput,
    id,
    iconStart,
    iconEnd,
    inputProps,
    label,
    material,
    onEnter,
    onInput,
    placeholder,
    style,
    type,
    value
  } = props

  // Hooks:
  const [state, setState] = createState({
    populated: false,
    list: [],
    open: false,
    selIndex: -1
  })

  const listContainer = React.useRef(null)

  // States:
  const { list, populated, open, selIndex } = state

  // Handlers:
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAutocomplete(e.target.value)
    onInput(e.target.value)
  }

  const handleFocus = () => {
    setState({ populated: true })
  }

  const handleBlur = () => {
    setState({ populated: false, open: false })
  }

  const handleAutocomplete = (val: string) => {
    if (autocomplete) {
      if (val.length >= autocompleteFrom) {
        const list = autocomplete.filter(v => v.toLowerCase().includes(val.toLowerCase().trim()))
        list.length < 1 ? setState({ open: false }) : setState({ open: true, list, selIndex: -1 })
      } else {
        open && setState({ open: false })
      }
    }
  }

  const handleSelect = (val: string) => {
    onInput(val)
    setState({ open: false })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (list.length > 0) {
      let index
      switch (e.key) {
        case 'ArrowUp':
          index =
            selIndex === -1 ? list.length - 1 : selIndex === 0 ? list.length - 1 : selIndex - 1
          setState({ selIndex: index })
          handleListScroll(index)
          e.preventDefault()
          break
        case 'ArrowDown':
          index = selIndex === -1 ? 0 : selIndex === list.length - 1 ? 0 : selIndex + 1
          setState({ selIndex: index })
          handleListScroll(index)
          e.preventDefault()
          break
        case 'Enter':
          if (open && selIndex > -1) {
            handleSelect(list[selIndex])
            e.preventDefault()
          } else {
            onEnter && onEnter()
          }
          break
      }
    } else {
      e.key === 'Enter' && onEnter && onEnter()
    }
  }

  const handleListScroll = (index: number) => {
    if (listContainer.current && list.length > 0) {
      const { top: listTop, bottom: listBottom } = listContainer.current.getBoundingClientRect()
      const { top: rowTop, bottom: rowBottom } = listContainer.current.childNodes[
        index
      ].getBoundingClientRect()

      // Check row inside list container view
      if (rowTop < listTop || rowBottom > listBottom) {
        listContainer.current.scroll({
          top: listContainer.current.childNodes[index].offsetTop
        })
      }
    }
  }

  return (
    <div
      className={cx(
        `Textfield relative flex flex-col justify-center transition`,
        material && 'material',
        populated && 'focus',
        className && className
      )}
      style={style}
    >
      {label && (
        <label
          className={cx(
            `Textfield-label absolute pin-t pointer-events-none transition`,
            populated || value.length !== 0 ? 'text-xs populated' : 'text-base'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={cx(`Textfield-inputWrapper flex w-full h-auto`)}>
        {iconStart && <div className="Textfield-icon-start mr-2">{iconStart}</div>}
        <input
          className={cx(
            `Textfield-input w-full relative focus:outline-none`,
            classNameInput && classNameInput
          )}
          id={id}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={!label ? placeholder : populated && value.length === 0 ? placeholder : ''}
          type={type}
          value={value}
          {...inputProps}
        />
        {iconEnd && <div className="Textfield-icon-end ml-auto">{iconEnd}</div>}
      </div>

      <PoseGroup preEnterPose="preEnter">
        {open && autocomplete && (
          <AnimatedList
            className="Textfield-list absolute w-full overflow-y-scroll pin-b pin-l z-10"
            key="list"
            ref={listContainer}
          >
            {list.map((value: string, i: number) => {
              const ListItem = i < 6 ? AnimatedListItem : 'button'
              return (
                <ListItem
                  key={value}
                  className={cx(
                    'Textfield-list-item flex items-center w-full px-4 focus:outline-none',
                    list[selIndex] === value && 'active'
                  )}
                  onClick={() => handleSelect(value)}
                >
                  {value}
                </ListItem>
              )
            })}
          </AnimatedList>
        )}
      </PoseGroup>
    </div>
  )
})

Textfield.defaultProps = {
  autocompleteFrom: 3,
  classNameInput: 'bg-transparent',
  type: 'text',
  placeholder: ''
}
