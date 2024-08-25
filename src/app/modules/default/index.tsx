import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"
import { useDefaultPagePresenter } from "./presenter"

/**
 * Дефолтная страница
 * @return JSX
 */
const DefaultPage = () => {

  const { 
    accounts,
    // db,

    navigateToTrsnsaction,
   } = useDefaultPagePresenter()

  return (
    <div className="flex flex-col gap-2">
      { accounts?.map((el) => {
        return <AccountCard
          key={ el.id }
          title={ el.name }
          count={ el.count }
          icon={ Book }
          handleOnEdit={ () => console.log("Edit") }
          handleOnMinus={ () => navigateToTrsnsaction({ type: 'minus', from: el.id }) }
          handleOnPlus={ () => navigateToTrsnsaction({ type: 'plus', from: el.id }) }
        />
      }) }

      Надо бы начать работу над логикой.
    </div>
  )
}

export default DefaultPage
