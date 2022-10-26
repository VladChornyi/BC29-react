import PropTypes from "prop-types";
import React, { Component } from "react";
import { Backdrop, Modal } from "./StarModal.styled.js";

export default class StarModal extends Component {
  static propTypes = { toggleModal: PropTypes.func };

  state = {};

  render() {
    console.log(this.props.starData);
    const { name, gender, birth_year, hair_color, skin_color } =
      this.props.starData;
    return (
      <Backdrop onClick={this.props.toggleModal}>
        <Modal>
          <span>name: {name}</span>
          <span>gender: {gender}</span>
          <span>birth_year: {birth_year}</span>
          <span>hair_color: {hair_color}</span>
          <span>skin_color: {skin_color}</span>
        </Modal>
      </Backdrop>
    );
  }
}
