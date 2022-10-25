import PropTypes from 'prop-types'
import { Component } from 'react'
import { getCharacters } from '../../helpers/api'

export default class StarCharacters extends Component {
  state = {
  characters: [],
  }
  
async componentDidUpdate(prevProps, prevState) {
    if (prevProps.catchName !== this.props.catchName) {
      const data = await getCharacters(this.props.catchName)
      this.setState({characters: data.results})
   }
 }

  render() {
    return (
      <ul></ul>
    )
  }
}

StarCharacters.propTypes = {
  catchName: PropTypes.string.isRequired,
}

