import { Switch } from "../../../ui"

import "./index.scss"

const Header = () => {

  const handleOnSwitch = (value: boolean) => {
    value
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
  }

  return (
    <header className="header">
      <div className="header__container">
        HEADER

        <Switch
          leftContent="light"
          rightContent="dark"
          onChange={ handleOnSwitch }
        />
      </div>
    </header>
  )
}

export { Header }
