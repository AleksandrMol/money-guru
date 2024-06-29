import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "@app/modules/default";
import ListsPage from "@app/modules/lists";
import { RouterPaths } from "../common/enums/router-paths";
import { BaseLayout } from "@app/modules/common/layout/base-layout";
import TransferPage from "@app/modules/transfer";

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
			},
			{
				path: RouterPaths.TRANSFER,
				element: <TransferPage/>,
			}
		]
	},
])

export { router }
