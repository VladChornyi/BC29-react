import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
background-color: rgba(211, 211, 211, 0.6);`

export const Nav = styled.nav``

export const List = styled.ul`
display: flex;
list-style: none;
margin-left: 15px;
margin-bottom: 35px;
gap: 18px;

font-size: 18px;
font-weight: bold;`

export const ListItem = styled.li`
`

export const NavLinkStyled = styled(NavLink)`
&.active{
    color: #000000;
}
`