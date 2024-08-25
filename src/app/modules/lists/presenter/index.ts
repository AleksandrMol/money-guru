import { useParams } from "react-router-dom"
import { ListEntities } from "../enum/list-entities-enum"
import { useAccountDBInit } from "@data/database/accounts/init"
import { ICollapsedCardProps } from "../tools/components/collapsed-card"
import { iconsObj } from "@app/tools/assets/svg/icons-obj"

const useListPagePresenter = () => {
  const { entity } = useParams() as { entity: ListEntities }

  const {
    accounts,
  } = useAccountDBInit()


  const titleList = {
    [ListEntities.ACCOUNTS]: 'Счета',
    [ListEntities.CATEGORIES]: 'Категории',
    [ListEntities.INCOMES]: 'Доходы',
    [ListEntities.PLANS]: 'Планы',

  }

  const cardList: ICollapsedCardProps[] | undefined = accounts?.map((el) => {
    return {
      icons: {
        end: iconsObj[el.icon]
      },
      title: el.name,
      buttonList: [],
      children: el.count,
    }
  })

  return {
    cardList,
    entity,
    titleList
  }

}

export { useListPagePresenter }
