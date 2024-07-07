import { ListEntities } from "@app/modules/lists/enum/list-entities-enum"
import { RouterPaths } from "@app/tools/common/enums/router-paths"
import { setRouterParams } from "@app/tools/routes/tools/setRouterParams"
import { useNavigate } from "react-router-dom"

const useDefaultPagePresenter = () => {
  const nav = useNavigate()
  const navigateToPlusCount = () => {
    nav(setRouterParams({
      link: RouterPaths.TRANSFER,
      replace: [
        {
          param: ':from',
          to: 'count_1'
        },
        {
          param: ':to',
          to: 'count_2'
        },
      ]
    }))
  }

  return {
    navigateToPlusCount
  }

}

export { useDefaultPagePresenter }
