type TSize = 'small' | 'medium' | 'large'
type TColor = 'dark' | 'light'

interface IIcon {
  className?: string
}

type TIconFunction = (props: IIcon) => JSX.Element

export type { TSize, TColor, IIcon, TIconFunction }