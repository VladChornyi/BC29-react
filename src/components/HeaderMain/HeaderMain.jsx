import { HiHome } from "react-icons/hi";

import { NavLink } from "react-router-dom";

export const HeaderMain = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <HiHome />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Реєстрація</NavLink>
          </li>
          <li>
            <NavLink to="/login">Авторизація</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
