import type { TColor, TIconFunction, TSize } from "../common/interface"
import "./index.scss"

interface IIconProps {
  size?: TSize
  invertionColor?: boolean
  color?: TColor
  className?: string

  content: TIconFunction
}
/**
 * Компонент иконки
 * @param size размер
 * @param color указать цвет иконки
 * @param invertionColor инвертировать дефолтные цвета иконки
 * @param content компонент иконки
 * @returns 
 */
const Icon = ({
  size = 'large',
  color,
  invertionColor,
  className,
  content: ContentIcon
}: IIconProps) => {
  return (
    <div className="icon">
      <ContentIcon
        className={ `icon__content icon__content--${size} ${invertionColor && 'icon__content--invertion'} icon__content--${color} ${className}` }
      />
    </div>
  )
}

export { Icon }
