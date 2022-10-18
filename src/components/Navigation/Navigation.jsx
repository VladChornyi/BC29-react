import { NavList, NavItem, NavLink } from "./Navigation.styled";
import { navLinks } from "../../data/template";

export const Navigation = () => {
  return (
    <NavList>
      {navLinks.map((navLink) => (
        <NavItem key={navLink.id}>
          <NavLink href={navLink.link}>{navLink.page}</NavLink>
        </NavItem>
      ))}
    </NavList>
  );
};
