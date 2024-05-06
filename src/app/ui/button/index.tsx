import React, { PropsWithChildren } from 'react'
import type { TIconFunction, TSize } from '../common/interface'

import './index.scss'
import { Icon } from '../icon'

interface IButtonProps extends PropsWithChildren {
  size?: TSize
  side?: 'left' | 'right' | 'middle' | 'alone'
  buttonProps?: Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'>
  className?: string
  icons?: {
    start?: TIconFunction
    end?: TIconFunction
  }
}

const Button = ({ ...props }: IButtonProps) => {
  const {
    children,
    size = 'medium',
    side = 'alone',
    className,
    buttonProps,
    icons
  } = props
  return (
    <button { ...buttonProps } className={ `button button--${size} button--${side} ${ className ?? '' }` }>
      {
        side !== "alone" && side !== 'right' &&
        <div className="button__line"/>
      }

      { icons?.start &&
        <Icon color="light" content={ icons.start } size={ size } />
      }

      { children }

      { icons?.end &&
        <Icon color="light" content={ icons.end } size={ size } />
      }      
    </button>
  )
}

export { Button }
export type { IButtonProps }
