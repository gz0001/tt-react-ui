// Components:
import * as React from 'react'
import cx from 'classnames'

// ================================================================================================

// Props:

export interface RadioProps {
  checked?: boolean
  className?: string
  id?: string
  label: string
  name?: string
  onCheck: () => void
  small?: boolean
  style?: React.CSSProperties
  value?: string | number
}

export const Radio: React.FunctionComponent<RadioProps> = React.memo(
  ({ checked, className, id, label, name, onCheck, small, style, value }) => {
    const keyCode = {
      SPACE: 32
    }
    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode === keyCode.SPACE && onCheck) {
        !checked && onCheck()
        e.preventDefault()
      }
    }
    return (
      <div
        aria-checked={checked || false}
        className={cx(
          `Radio flex justify-start items-center focus:outline-none`,
          small && 'small',
          checked && 'checked',
          className && className
        )}
        onKeyDown={keyDownHandler}
        role="radio"
        style={style}
        tabIndex={checked ? 0 : -1}
      >
        <div
          className={cx('Radio-button relative  rounded-1/2  hover:cursor-pointer')}
          id={id}
          onClick={onCheck}
        >
          <div
            className={cx(
              `Radio-dot absolute t-1/2 l-1/2 rounded-1/2 opacity-${
                checked ? '100' : '0'
              } transition`
            )}
          />
          <input
            type="radio"
            name={name}
            value={value}
            defaultChecked={checked}
            className="Radio-input hidden"
          />
        </div>

        <label className={cx(`Radio-label hover:cursor-pointer`)} htmlFor={id} onClick={onCheck}>
          {label}
        </label>
      </div>
    )
  }
)
