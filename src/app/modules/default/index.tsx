import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"
import { CollapsedCard } from "../lists/tools/components/collapsed-card"
import { ArrowDown } from "@app/tools/assets/svg/ArrowDown"

const DefaultPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <AccountCard
        title="Сбер"
        count={ 35000 }
        icon={ Book }
        handleOnEdit={() => console.log("Edit")}
        handleOnMinus={() => console.log("Minus")}
        handleOnPlus={() => console.log("Plus")}
      />

      <CollapsedCard
        title="Продолжить разработку компонентов"
        buttonList={[
          {
            children: 'Button_1',
            buttonProps: {
              onClick: () => {}
            }
          },
        
          {
            children: 'Button_2',
            buttonProps: {
              onClick: () => {}
            }
          }
        ]}
        icons={{
          end: ArrowDown,
        }}
      />
    </div>
  )
}

export default DefaultPage
