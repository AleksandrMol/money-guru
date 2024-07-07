import { useParams } from "react-router-dom"
import { ListEntities } from "../enum/list-entities-enum"

const useListPagePresenter = () => {
  const { entity } = useParams() as { entity: ListEntities }

  const titleList = {
    [ListEntities.ACCOUNTS]: 'Счета',
    [ListEntities.CATEGORIES]: 'Категории',
    [ListEntities.INCOMES]: 'Доходы',
    [ListEntities.PLANS]: 'Планы',

  }

  const cardList = [
    {
      title: "Item_1",
      buttonList: [],
      children: 'children_1',
    },
    {
      title: "Item_2",
      buttonList: [],
      children: 'children_2',
    },
    {
      title: "Item_3",
      buttonList: [],
      children: 'children_3',
    },
  ]

  return {
    cardList,
    entity,
    titleList
  }

}

export { useListPagePresenter }
