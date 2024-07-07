import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"
import { useDefaultPagePresenter } from "./presenter"

const DefaultPage = () => {

  const { 
    navigateToPlusCount
   } = useDefaultPagePresenter()

  return (
    <div className="flex flex-col gap-2">
      <AccountCard
        title="Сбер"
        count={ 35000 }
        icon={ Book }
        handleOnEdit={ () => console.log("Edit") }
        handleOnMinus={ () => navigateToPlusCount() }
        handleOnPlus={ () => navigateToPlusCount() }
      />
      Продолжить работу над компонентами.
    </div>
  )
}

export default DefaultPage
