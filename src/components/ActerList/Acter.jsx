// import { Component } from 'react';
import PropTypes from 'prop-types';

export function Actors({ actors, actorDelete }) {
    return (
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <span>{actor.name}</span>
            <button id={actor.id} onClick={actorDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  
}

Actors.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
