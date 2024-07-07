import { ListEntities } from "@app/modules/lists/enum/list-entities-enum"
import { RouterPaths } from "@app/tools/common/enums/router-paths"
import { setRouterParams } from "@app/tools/routes/tools/setRouterParams"

const useNavbarPresenter = () => {
  const toLists = setRouterParams({
    link: RouterPaths.LISTS,
    replace: [
      {
        param: ':entity',
        to: ListEntities.ACCOUNTS
      },
    ]
  })

  return {
    toLists
  }
}

export { useNavbarPresenter }
