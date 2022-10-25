import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class StarForm extends Component {
state = {
  searchName: '',
}

  handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({[name]: value})
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchName)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='searchName' type="text" placeholder='R2D2' value={this.state.searchName} onChange={this.handleChange} />
        <button type='submit'>Search</button>
      </form>
    )
  }
}

StarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}