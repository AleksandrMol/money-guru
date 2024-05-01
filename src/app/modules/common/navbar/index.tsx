import { NavLink } from 'react-router-dom'
import { RouterPaths } from '../../../tools/common/enums/router-paths'
import { Icon } from '../../../ui'
import { Book, PieChart } from '../../../tools/assets/svg'

import './index.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="base-container">
        <ul className="navbar__list">
          <li className="navbar__list--item">
            <NavLink to={ RouterPaths.DEFAULT }>
              <Icon size="large" content={ PieChart } />
            </NavLink>
          </li>

          <li className="navbar__list--item">
            <NavLink to={ RouterPaths.LISTS }>
              <Icon size="large" content={ Book } />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
