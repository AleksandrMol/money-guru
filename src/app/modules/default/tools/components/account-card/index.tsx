import { Edit } from "@app/tools/assets/svg"
import Card from "@app/ui/card"
import { ButtonList } from "@app/modules/common/components/button-list"

import "./index.scss"
import { useAccountCardPresenter } from "./presenter"
import {
  DefaultCardHeader,
} from "@app/modules/common/components/default-card-header"
import type { TIconFunction } from "@app/ui/common/interface"

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
    handleOnEdit
  } = props

  const { buttonList } = useAccountCardPresenter(props)

  const Count = (): JSX.Element => {
    return (
      <div className="account-card-count">
        { count }
      </div>
    )
  }

  return (
    <Card
      headerContent={
        <DefaultCardHeader
          title={ title }
          icons={{ start: icon, end: Edit }}
          handleOnEndIconClick={ handleOnEdit }
        />
      }
      mainContent={ <Count /> }
      footerContent={ <ButtonList data={ buttonList } size='small'/> }
    />
  )
}

export { AccountCard }
export type { IAccountCardProps }
