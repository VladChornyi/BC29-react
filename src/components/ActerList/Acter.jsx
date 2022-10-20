import { Component } from 'react';
import PropTypes from 'prop-types';

export class Actors extends Component {
  state = {
    actors: this.props.actors,
  };
  actorDelete = event => {
    this.setState(prevState => {
      return { actors: prevState.actors.filter(actor => actor.id !== event.target.id) };
    });
  };
  getSomathing = () => this.props.actors.length;
  render() {
    // console.log('this.props', this.props)
    return (
      <ul>
        {this.state.actors.map(actor => (
          <li key={actor.id}>
            <span>{actor.name}</span>
            <button id={actor.id} onClick={this.actorDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Actors.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
