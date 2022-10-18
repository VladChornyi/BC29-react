import { NavList, NavItem, NavLink } from './Navigation.styled'

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/home">Home</NavLink>
      </NavItem>
    </NavList>
  )
}
