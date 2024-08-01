import { HTMLInputTypeAttribute } from 'react';
import './index.scss';

interface IInputProps {
  id: string
  type?: HTMLInputTypeAttribute | undefined;

  side?: 'left' | 'right'
  
  label?: string
  inputClassName?: string
  inputProps?: Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className' | 'id' | 'type'>
}

/**
 * Компонент инпута
 * @param id id инпута
 * @param type тип инпута. По умолчанию 'text'
 * @param side сторона текста. По умолчанию 'left'
 * @param inputClassName className для инпута
 * @param inputProps прочие стандартные свойства инпута
 * @param label лейбл инпута
 * @returns JSX
 */
const Input = ({ id, type = 'text', side = 'left', inputClassName, inputProps, label }: IInputProps) => {
  return (
    <div className='input-container'>
      {label &&
        <label className='input-label' htmlFor={ id }>
          { label }
        </label>
      }

      <input
        type={ type }
        className={ `input-field input-field--${side} ${inputClassName}` }
        { ...inputProps }
      />
    </div>
  )
}

export { Input }
