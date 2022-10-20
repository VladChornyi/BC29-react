import { Component } from 'react'
import PropTypes from 'prop-types'

export class ProductsList extends Component {
  state = {
    activeEl: null,
  }

  handleBold = (e) => {
    this.setState({ activeEl: e.target.id })
  }

  render() {
    const { actors } = this.props
    return (
      <ul>
        {actors.map(({ id, name }) => (
          <li key={id}>
            <span
              style={
                this.state.activeEl == id
                  ? { color: 'red' }
                  : { color: 'black' }
              }
              id={id}
              onClick={this.handleBold}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    )
  }
}

ProductsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}
