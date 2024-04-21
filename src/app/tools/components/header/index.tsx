import { Switch } from "../switch"

const Header = () => {

  const handleOnSwitch = (value: boolean) => {
    value
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
  }

  return (
    <header className="base-container flex items-center justify-between h-[64px]">
      HEADER

      <Switch
        leftContent="light"
        rightContent="dark"
        onChange={ handleOnSwitch }
      />
    </header>
  )
}

export { Header }
