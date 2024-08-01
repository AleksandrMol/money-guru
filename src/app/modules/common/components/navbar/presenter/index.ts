import { ListEntities } from "@app/modules/lists/enum/list-entities-enum"
import { ListsParamsEnum, RouterPaths } from "@app/tools/common/enums/router-paths"
import { setRouterParams } from "@app/tools/routes/tools/setRouterParams"

const useNavbarPresenter = () => {
  const toLists = setRouterParams<ListsParamsEnum>({
    link: RouterPaths.LISTS,
    replace: [
      {
        param: ListsParamsEnum.ENTITY,
        to: ListEntities.ACCOUNTS
      },
    ]
  })

  return {
    toLists
  }
}

export { useNavbarPresenter }
