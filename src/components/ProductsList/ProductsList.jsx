// import { Component } from "react";
import PropTypes from "prop-types";

export const ProductsList = ({ actors, activeEl, handleBold }) => {
  return (
    <ul>
      {actors.map(({ id, name }) => (
        <li key={id}>
          <span
            style={activeEl == id ? { color: "red" } : { color: "black" }}
            id={id}
            onClick={handleBold}
          >
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
