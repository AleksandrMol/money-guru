
import { IIcon } from '@app/ui/common/interface'

const ArrowDown = ({ className }: IIcon) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={ className }>
      <path d="M12.4714 6.19526C12.7317 6.45561 12.7317 6.87772 12.4714 7.13807L8.47139 11.1381C8.34636 11.2631 8.17679 11.3333 7.99998 11.3333C7.82317 11.3333 7.6536 11.2631 7.52858 11.1381L3.52858 7.13807C3.26823 6.87772 3.26823 6.45561 3.52858 6.19526C3.78892 5.93491 4.21103 5.93491 4.47138 6.19526L7.99998 9.72386L11.5286 6.19526C11.7889 5.93491 12.211 5.93491 12.4714 6.19526Z"/>
    </svg>
  )
}

export { ArrowDown }
