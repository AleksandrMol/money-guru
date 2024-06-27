import { IAccountCardProps } from ".."
import { IBurronListProps } from "@app/modules/common/components/button-list"

const useAccountCardPresenter = (props: IAccountCardProps) => {
  const { handleOnMinus, handleOnPlus } = props

  const buttonList: IBurronListProps["data"] = [
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

  return {
    buttonList
  }
}

export { useAccountCardPresenter }