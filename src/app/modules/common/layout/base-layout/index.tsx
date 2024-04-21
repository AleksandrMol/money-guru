import { Outlet } from "react-router-dom";
import { Header } from "../../../../tools/components/header";

const BaseLayout = () => {
  return (
    <div>
      <Header />

      <main className="base-container">
        <Outlet/>
      </main>
    </div>
  )
}

export { BaseLayout }
