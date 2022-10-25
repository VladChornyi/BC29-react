import PropTypes from 'prop-types';
import { Component } from 'react';
// import { getCharacters } from '../../helpers/api';

export default class StarCharacters extends Component {
  render() {
    return (
      <ul>
        {this.props.characters.map((character) => (
          <li
            key={character.name}
            onClick={this.props.toggleModal}
            id={character.name}
          >
            <span> name {character.name}</span>
            <span> gender {character.gender}</span>
          </li>
        ))}
      </ul>
    );
  }
}

StarCharacters.propTypes = {
  catchName: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
