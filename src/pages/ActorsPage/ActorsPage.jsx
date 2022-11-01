// import { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from '../../components/Section/Section';
import actorsData from '../../data/actors.json';
import { useState } from 'react';



export const Actors =() => {

   const [actors, setActors] =
    useState(actorsData);

    const actorDelete = (event) => {
    setActors(
      actors.filter(
        (actor) => actor.id != event.target.id
      )
    );
  };
  return (
    <Section title='Actors'>
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
      </Section>
     
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
