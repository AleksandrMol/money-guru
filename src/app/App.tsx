import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "@app/tools/routes/routes";
import PageLoader from "@app/modules/common/page-loader";
import { SnackbarProvider } from "notistack";

import "./index.scss";

function App() {
  return (
    <Suspense fallback={ <PageLoader /> }>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <RouterProvider router={ router }/>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
