import { Plus } from '@app/tools/assets/svg/Plus'
import { Button } from '@app/ui/button'
import { CollapsedCard } from './tools/components/collapsed-card'
import { useListPagePresenter } from './presenter'
import { ArrowDown } from '@app/tools/assets/svg/ArrowDown'

import './index.scss'

/**
 * Страница списков
 * @return JSX
 */
const ListsPage = () => {

  const {
    cardList,
    entity,
    titleList
  } = useListPagePresenter()
  
  return (
    <div className="list-page">
      <div className="list-page__header">
        <h1 className="list-page__header--title">
          { titleList[entity] }
        </h1>

        <Button
          className="list-page__header--add-button"
          size="small"
          buttonProps={{
            onClick: () => console.log('Plus')
          }}
          icons={{
            start: Plus
          }}
        />
      </div>

      <div className="list-page__list">
        {
          cardList.map((el) =>
            <CollapsedCard
            icons={{
              end: ArrowDown
            }}
            { ...el } />
          )
        }
      </div>
    </div>
  )
}

export default ListsPage
