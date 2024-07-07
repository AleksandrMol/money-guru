import { RouterPaths } from "@app/tools/common/enums/router-paths";
import { RouteObject } from "react-router-dom";
import DefaultPage from "..";

const DefaultPageRoutes: RouteObject = {
  path: RouterPaths.DEFAULT,
  element: <DefaultPage/>
}

export { DefaultPageRoutes }
