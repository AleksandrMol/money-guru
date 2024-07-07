import { RouterPaths } from "@app/tools/common/enums/router-paths";
import { RouteObject } from "react-router-dom";
import ListsPage from "..";

const ListPageRoutes: RouteObject = {
  path: RouterPaths.LISTS,
  element: <ListsPage/>,
}

export { ListPageRoutes }
