import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../../modules/default";
import ListsPage from "../../modules/lists";
import { RouterPaths } from "../common/enums/router-paths";
import { BaseLayout } from "../../modules/common/layout/base-layout";

const router = createBrowserRouter([
	{
		path: RouterPaths.DEFAULT,
		element: <BaseLayout/>,
		children: [
			{
				path: RouterPaths.DEFAULT,
				element: <DefaultPage/>,
			},
			{
				path: RouterPaths.LISTS,
				element: <ListsPage/>,
			}
		]
	},
])

export { router }
