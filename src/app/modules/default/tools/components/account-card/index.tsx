import { Edit } from "../../../../../tools/assets/svg"
import { Icon } from "../../../../../ui"
import { IButtonProps } from "../../../../../ui/button"
import Card from "../../../../../ui/card"
import { ButtonList } from "../../../../common/components/button-list"

import type { TIconFunction } from "../../../../../ui/common/interface"

import "./index.scss"

interface IAccountCardProps {
  title: string
  count: number

  icon: TIconFunction

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

  const buttonList: Omit<IButtonProps, 'size' | 'side'>[] = [
    {
      children: 'Button_1',
      buttonProps: {
        onClick: handleOnMinus
      }
    },
  
    {
      children: 'Button_2',
      buttonProps: {
        onClick: handleOnPlus
      }
    }
  ]

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
      footerContent={ <ButtonList data={ buttonList } size='small'/> }
    />
  )
}

export { AccountCard }
