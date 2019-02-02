// Components:
import * as React from 'react'
import cx from 'classnames'

// ================================================================================================

// Props:

export interface CheckboxProps {
  checked: boolean
  className?: string
  disabled?: boolean
  id?: string
  label: string
  name?: string
  onCheck: () => void
  small?: boolean
  style?: React.CSSProperties
  value?: string | number
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = React.memo(
  ({ checked, className, disabled = false, id, label, name, onCheck, small, style, value }) => {
    // Click handler:
    const clicked = () => {
      !disabled && onCheck()
    }

    const keyCode = {
      SPACE: 32
    }
    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode === keyCode.SPACE && !disabled && onCheck) {
        e.preventDefault()
        onCheck()
      }
    }

    return (
      <div
        aria-checked={checked || false}
        className={cx(
          className && className,
          'Checkbox flex justify-start items-end focus:outline-none',
          small && 'small'
        )}
        style={style}
        role="checkbox"
        onKeyDown={keyDownHandler}
        tabIndex={0}
      >
        <div
          className={cx(
            `Checkbox-input hover:cursor-${
              disabled ? 'not-allowed' : 'pointer'
            } flex justify-center items-center`
          )}
          id={id}
          onClick={clicked}
        >
          <div
            className={cx(
              'Checkbox-checkmark -rotate-45 transition',
              checked ? 'opacity-100' : 'opacity-0'
            )}
          />
          <input
            type="checkbox"
            name={name}
            value={value}
            defaultChecked={checked}
            className="Checkbox-input hidden"
          />
        </div>
        <label
          className={cx(`Checkbox-label  hover:cursor-${disabled ? 'not-allowed' : 'pointer'}`)}
          onClick={clicked}
        >
          {label}
        </label>
      </div>
    )
  }
)
