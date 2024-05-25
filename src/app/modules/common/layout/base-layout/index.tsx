import { Outlet } from "react-router-dom";
import { Header } from "@app/modules/common/components/header";
import Navbar from "@app/modules/common/components/navbar";

import "./index.scss"

const BaseLayout = () => {
  return (
    <div className="layout-container">
      <Header />

      <main className="layout-container__main">
        <Outlet/>
      </main>

      <Navbar />
    </div>
  )
}

export { BaseLayout }
