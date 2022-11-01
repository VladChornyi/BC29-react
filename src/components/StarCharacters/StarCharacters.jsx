import PropTypes from 'prop-types'

// import { getCharacters } from '../../helpers/api';
import { CharectersItem, CharecterList, Wrapper } from './StarCharacters.styled'

const StarCharacters = ({ toggleModal, characters }) => {
  return (
    <CharecterList>
      {characters.map((character) => (
        <CharectersItem key={character.name}>
          <Wrapper onClick={toggleModal} id={character.name}>
            <span> name {character.name}</span>
            <span> gender {character.gender}</span>
          </Wrapper>
        </CharectersItem>
      ))}
    </CharecterList>
  )
}

export default StarCharacters

StarCharacters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
}
