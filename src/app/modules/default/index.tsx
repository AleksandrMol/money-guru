import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"

const DefaultPage = () => {
  return (
    <div>
      <AccountCard
        title="Сбер"
        count={ 35000 }
        icon={ Book }
        handleOnEdit={() => console.log("Edit")}
        handleOnMinus={() => console.log("Minus")}
        handleOnPlus={() => console.log("Plus")}
      />
    </div>
  )
}

export default DefaultPage
