import { Edit } from "../../../../../tools/assets/svg"
import { Icon } from "../../../../../ui"
import Card from "../../../../../ui/card"

import type { IIcon } from "../../../../../tools/assets/svg/interface"

import "./index.scss"

interface IAccountCardProps {
  title: string
  count: number

  icon: (props: IIcon) => JSX.Element

  handleOnEdit: () => void
  handleOnMinus: () => void
  handleOnPlus: () => void
}

const AccountCard = (props: IAccountCardProps) => {

  const {
    title,
    count,
    icon,
    handleOnEdit,
    handleOnMinus,
    handleOnPlus
  } = props

  const Header = (): JSX.Element => {
    return (
      <div className="account-card-header">
        <div className="account-card-header__icon">
          <Icon
            content={ icon }
            size="small"
            color="light"
          />
        </div>

        <p className="account-card-header__title">
          { title }
        </p>

        <div
          className="account-card-header__edit"
          onClick={ handleOnEdit }
        >
          <Icon
            content={ Edit }
            size="small"
            color="light"
          />
        </div>
        <div className="account-card-header__line"></div>
      </div>
    )
  }

  const Count = (): JSX.Element => {
    return (
      <div className="account-card-count">
        { count }
      </div>
    )
  }

  return (
    <Card
      headerContent={ <Header /> }
      mainContent={ <Count /> }
      footerContent="Footer"
    />
  )
}

export { AccountCard }
