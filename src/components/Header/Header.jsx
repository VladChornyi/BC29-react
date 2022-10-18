import { HeaderBox, Wrapper } from "./Header.styled";
import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { MainTitle } from "../MainTitle/MainTitle";
import { MainButtom } from "../MainButton/MainButton";
export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Wrapper>
          <Navigation />
          <MainTitle />
          <MainButtom />
        </Wrapper>
      </Container>
    </HeaderBox>
  );
};
