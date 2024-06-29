import React from "react"

import "./index.scss"

interface ICardProps {
  mainContent: React.ReactNode
  headerContent?: React.ReactNode
  footerContent?: React.ReactNode

  isOpen?: boolean
}

/**
 * Базовый компонент карты
 */
const Card = (props: ICardProps) => {
  const {
    mainContent,
    headerContent,
    footerContent,

    isOpen = true,
  } = props
  return (
    <div className="card">
      { headerContent &&
        <div className="card__header">
          { headerContent }
        </div>
      }

      { isOpen && (
        <>
          <div className="card__main">
            <div className="card__main--line"></div>

            { mainContent }
          </div>
    
          {
            footerContent &&
            <div className="card__footer">
              { footerContent }
            </div>
          }
        </>
      ) }
    </div>
  )
}

export default Card
