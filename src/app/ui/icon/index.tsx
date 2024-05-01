import type { IIcon } from "../../tools/assets/svg/interface"

import "./index.scss"

interface IIconProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'dark' | 'light'

  content: (props: IIcon) => JSX.Element
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
