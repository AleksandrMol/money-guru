import { Icon } from "@app/ui"
import type { TIconFunction } from "@app/ui/common/interface"

import "./index.scss"

interface IDefaultCardHeaderProps {
  title: string

  icons?: {
    start?: TIconFunction
    end?: TIconFunction
  }

  handleOnHeaderClick?: () => void
  handleOnStartIconClick?: () => void
  handleOnEndIconClick?: () => void
}

/**
 * Загаловок карты по умолчанию
 */
const DefaultCardHeader = (props: IDefaultCardHeaderProps) => {
  const {
    title,

    icons,

    handleOnHeaderClick,
    handleOnStartIconClick,
    handleOnEndIconClick
  } = props
  return (
    <div className="default-card-header" onClick={ handleOnHeaderClick }>
      {
        icons?.start &&
          <div
            className="default-card-header__icon"
            onClick={ handleOnStartIconClick }
          >
            <Icon
              content={ icons.start }
              size="small"
              color="light"
            />
          </div>
      }

      <p className="default-card-header__title">
        { title }
      </p>

      {
        icons?.end &&
          <div
            className="default-card-header__edit"
            onClick={ handleOnEndIconClick }
          >
            <Icon
              content={ icons.end }
              size="small"
              color="light"
            />
          </div>
      }
      <div className="default-card-header__line"></div>
    </div>
  )
}

export { DefaultCardHeader }
export type { IDefaultCardHeaderProps }
