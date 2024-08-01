import { RouterPaths, TransferParamsEnum } from "@app/tools/common/enums/router-paths"
import { setRouterParams } from "@app/tools/routes/tools/setRouterParams"
import { useNavigate } from "react-router-dom"

interface INavigateToTransaction {
  type: string,
  from: string,
}

const useDefaultPagePresenter = () => {
  const nav = useNavigate()
  const navigateToTrsnsaction = ({ type, from }: INavigateToTransaction) => {
    nav(setRouterParams<TransferParamsEnum>({
      link: RouterPaths.TRANSFER,
      replace: [
        {
          param: TransferParamsEnum.TYPE,
          to: type
        },
        {
          param: TransferParamsEnum.FROM,
          to: from
        },
        {
          param: TransferParamsEnum.TO,
          to: 'count_2'
        },
      ]
    }))
  }

  return {
    navigateToTrsnsaction
  }

}

export { useDefaultPagePresenter }
