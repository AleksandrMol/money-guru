import React from "react"

import "./index.scss"

interface ICardProps {
  mainContent: React.ReactNode
  headerContent?: React.ReactNode
  footerContent?: React.ReactNode

  isCollapsed?: boolean
  isOpen?: boolean
}

const Card = (props: ICardProps) => {
  const {
    mainContent,
    headerContent,
    footerContent,

    // isCollapsed,
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