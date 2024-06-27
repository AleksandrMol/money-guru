import { ButtonList, IBurronListProps } from "@app/modules/common/components/button-list"
import { DefaultCardHeader, IDefaultCardHeaderProps } from "@app/modules/common/components/default-card-header"
import Card from "@app/ui/card"
import { useState } from "react"

interface ICollapsedCardProps extends Omit<IDefaultCardHeaderProps, "handleOnEndIconClick" | "handleOnStartIconClick"> {
  buttonList: IBurronListProps["data"]
}

/**
 * Коллапсирующая карта
 */
const CollapsedCard = (props: ICollapsedCardProps) => {
  const {
    title,
    icons,

    buttonList
  } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = () => {
    setIsOpen(state => !state)
  }

  return (
    <Card
      isOpen={ isOpen }
      headerContent={
        <DefaultCardHeader
          title={ title }
          icons={ icons }
          handleOnHeaderClick={ handleSetIsOpen }
        />
      }
      mainContent={ <>content</> }
      footerContent={ <ButtonList data={ buttonList } size="small"/> }
    />
  )
}

export { CollapsedCard }
