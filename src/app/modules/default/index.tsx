import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"
import { useDefaultPagePresenter } from "./presenter"

/**
 * Дефолтная страница
 * @return JSX
 */
const DefaultPage = () => {

  const { 
    navigateToTrsnsaction
   } = useDefaultPagePresenter()

  return (
    <div className="flex flex-col gap-2">
      <AccountCard
        title="Сбер"
        count={ 35000 }
        icon={ Book }
        handleOnEdit={ () => console.log("Edit") }
        handleOnMinus={ () => navigateToTrsnsaction({ type: 'minus', from: 'Сбер' }) }
        handleOnPlus={ () => navigateToTrsnsaction({ type: 'plus', from: 'Сбер' }) }
      />

      Было бы не плохо лучше проработать страницу списков и начать работу над страницей транзакций.
    </div>
  )
}

export default DefaultPage
