import { HeaderBox } from './Header.styled'
import { Container } from '../Container'
import { Navigation } from '../Navigation'

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Navigation />
      </Container>
    </HeaderBox>
  )
}
