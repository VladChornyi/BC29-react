// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { getCharacters } from '../../helpers/api';
import StarCharacters from '../StarCharacters/StarCharacters';
import StarForm from '../StarForm/StarForm';
import StarModal from '../StarModal/StarModal';

export class Starwars extends Component {
  state = {
    catchName: '',
    isOpenModal: false,
    characters: [],
    activeName: '',
  };

  handleSubmit = (catchName) => {
    this.setState({ catchName });
  };

  toggleModal = (event) => {
    const name = event.currentTarget.id;

    if (name) {
      this.setState({ activeName: name });
    }
    this.setState((prevState) => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  getActiveData = () => {
    console.log(this.state.activeName);
    return this.state.characters.find(
      (character) => this.state.activeName === character.name
    );
  };
  async componentDidUpdate(_, prevState) {
    if (prevState.catchName !== this.state.catchName) {
      const data = await getCharacters(this.state.catchName);
      this.setState({ characters: data.results });
    }
  }

  render() {
    return (
      <>
        <StarForm onSubmit={this.handleSubmit} />
        <StarCharacters
          characters={this.state.characters}
          toggleModal={this.toggleModal}
        />
        {this.state.isOpenModal && (
          <StarModal
            toggleModal={this.toggleModal}
            starData={this.getActiveData()}
          />
        )}
      </>
    );
  }
}
