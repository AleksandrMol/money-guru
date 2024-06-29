import { Book } from "@app/tools/assets/svg"
import { AccountCard } from "./tools/components/account-card"
import { CollapsedCard } from "../lists/tools/components/collapsed-card"
import { ArrowDown } from "@app/tools/assets/svg/ArrowDown"
import { useNavigate } from "react-router-dom"
import { RouterPaths } from "@app/tools/common/enums/router-paths"
import { setRouterParams } from "@app/tools/routes/tools/setRouterParams"

const DefaultPage = () => {
  const nav = useNavigate()
  const navigateToPlusCount = () => {
    nav(setRouterParams({
      link: RouterPaths.TRANSFER,
      replace: [
        {
          param: ':from',
          to: 'count_1'
        },
        {
          param: ':to',
          to: 'count_2'
        },
      ]
    }))
  }

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

      {/* TODO: Убрать потом */}
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
