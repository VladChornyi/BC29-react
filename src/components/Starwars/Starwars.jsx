// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import StarCharacters from '../StarCharacters/StarCharacters'
import StarForm from '../StarForm/StarForm'


export class Starwars extends Component {
state = {
  catchName: '',
}
  
  handleSubmit = catchName => {
  this.setState({catchName})
}  
  render() {
    return (
      <>
      <StarForm onSubmit={this.handleSubmit} />
        <StarCharacters catchName={this.state.catchName} />
      </>
    )
  }
}
