import { FieldValues, UseFormReturn } from 'react-hook-form'
import './index.scss'

interface ISwitchProps<T extends FieldValues> {
  leftContent?: string | React.ReactNode
  rightContent?: string | React.ReactNode
  id?: string

  onChange?: (value: boolean) => void

  register?: UseFormReturn<T>['register']
}

const Switch = <T extends FieldValues> ({ ...props }: ISwitchProps<T>) => {
  return (
    <div className="switch">
      <label htmlFor={ props.id } className="switch__label">
        { props.leftContent &&
          <span className="switch__label__content switch__label--left">
            { props.leftContent }
          </span>
        }

        <div className="switch__label__toggle">
          <input
            id={ props.id }
            type="checkbox"
            className="switch__input peer"
            onChange={ (e) => props.onChange && props.onChange(e.target.checked) }
            { ...props.register }
          />

          <div className="switch__label__toggle--underball"></div>

          <div className="switch__label__toggle--ball"></div>
        </div>

        { props.rightContent &&
          <span className="switch__label__content switch__label--right">
            { props.rightContent }
          </span>
        }
      </label>
    </div>
  )
}

export { Switch }
