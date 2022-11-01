import { NavLink } from 'react-router-dom';
import {
  HeaderStyled,
  Nav,
  List,
  ListItem,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <List>
          <ListItem>
            <NavLinkStyled to="/" end>
              Home
            </NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/actors">Actors</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/tabs">Tabs</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/starwars">StarWars</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/albums">Albums</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/counter">Counter</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/olx">Olx</NavLinkStyled>
          </ListItem>
          <ListItem>
            <NavLinkStyled to="/cats">Cats</NavLinkStyled>
          </ListItem>
        </List>
      </Nav>
    </HeaderStyled>
  );
};
