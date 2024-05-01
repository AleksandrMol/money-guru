import { Outlet } from "react-router-dom";
import { Header } from "../../header";
import Navbar from "../../navbar";

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
