import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { MainButton } from '../MainButton'
import { InputStar } from '../StarForm/StarForm.styled'

export default class StarForm extends Component {
  state = {
    searchName: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.searchName)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputStar
          name="searchName"
          type="text"
          placeholder="R2D2"
          value={this.state.searchName}
          onChange={this.handleChange}
        />
        <MainButton type="submit" text="Search" isMain={true} />
      </form>
    )
  }
}

StarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
