import type { TColor, TIconFunction, TSize } from "../common/interface"
import "./index.scss"

interface IIconProps {
  size?: TSize
  color?: TColor

  content: TIconFunction
}

const Icon = ({
  size = 'large',
  color = 'dark',
  content: ContentIcon
}: IIconProps) => {
  return (
    <div className="icon">
      <ContentIcon
        className={ `icon__content icon__content--${size} icon__content--${color}` }
      />
    </div>
  )
}

export { Icon }
