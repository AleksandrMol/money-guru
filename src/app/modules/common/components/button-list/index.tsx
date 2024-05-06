import { Button, type IButtonProps } from '../../../../ui/button'
import { TSize } from '../../../../ui/common/interface'

import "./index.scss"

interface IBurronListProps {
  data: Omit<IButtonProps, 'size' | 'side'>[]
  size: TSize
}

const ButtonList = ({ data, size }: IBurronListProps) => {
  return (
    <div className="button-list">
      {
        data.map((el, index) => {
          const sideOfButton = (): IButtonProps['side'] => {
            if (data.length === 1) return 'alone'

            switch (index) {
              case(0):
                return 'left'
              case(data.length - 1):
                return 'right'
              default:
                return 'middle'
            }
          }

          //TODO: Придумать key получше
          return <Button
            key={ index }
            side={ sideOfButton() }
            size={ size }
            className="button-list__item"
            { ...el }
          />
        })
      }
    </div>
  )
}

export { ButtonList }
