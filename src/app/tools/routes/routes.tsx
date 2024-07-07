import { createBrowserRouter } from "react-router-dom";
import { RouterPaths } from "../common/enums/router-paths";
import { BaseLayout } from "@app/modules/common/layout/base-layout";
import { ListPageRoutes } from "@app/modules/lists/routes/routes";
import { DefaultPageRoutes } from "@app/modules/default/routes/routes";
import { TransferPageRoutes } from "@app/modules/transfer/routes/routes";

const router = createBrowserRouter([
	{
		path: RouterPaths.DEFAULT,
		element: <BaseLayout/>,
		children: [
			DefaultPageRoutes,
			ListPageRoutes,
			TransferPageRoutes
		]
	},
])

export { router }
