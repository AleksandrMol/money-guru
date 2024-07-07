import { RouterPaths } from "@app/tools/common/enums/router-paths";
import { RouteObject } from "react-router-dom";
import TransferPage from "..";

const TransferPageRoutes: RouteObject = {
  path: RouterPaths.TRANSFER,
  element: <TransferPage/>,
}

export { TransferPageRoutes }
