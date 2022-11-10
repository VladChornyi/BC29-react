import { HiHome } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";

export const HeaderMain = () => {
const dispatch = useDispatch()

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
        <button type="button" onClick={()=> dispatch(logout())} >Вийти</button>
      </nav>
    </header>
  );
};
