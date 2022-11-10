import { HiHome } from 'react-icons/hi'

import { NavLink } from 'react-router-dom'

export const HeaderMain = () => {
  return (
    <header>
      <nav>
        <NavLink end to="/">
          <HiHome />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Реєстрація</NavLink>
          </li>
          <li>
            <NavLink to="/login">Авторизація</NavLink>
          </li>
          <li>
            <NavLink to="/products">Продукти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
