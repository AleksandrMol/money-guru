import type { TIconFunction } from "../common/interface"
import { Icon } from "../icon"
import './index.scss'

interface IBallRadioButtonItem {
  id: string
  value: string
  inputProps?: Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className' | 'id' | 'type' | 'checked' | 'value'>,

  icon: TIconFunction,
}

/**
 * Компонент радио кнопки в виде шара
 * @param id id кнопки
 * @param value Значение кнопки
 * @param icon Иконка
 * @param inputProps Прочие стандартные свойства инпута
 * @return JSX
 */
// TODO: Доделать компонент
const BallRadioButton = ({ id, value, inputProps, icon }: IBallRadioButtonItem) => {

  return (
    <label htmlFor={ id }>
      <input type="radio" className="sr-only peer" id={ id } value={ value } { ...inputProps } />

      <span className={ `default-ball active-ball` }>
        <Icon content={ icon } size="small" />
      </span>
    </label>
  )
}

export { BallRadioButton }
export type { IBallRadioButtonItem }
