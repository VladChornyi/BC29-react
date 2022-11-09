import { useState, useEffect } from "react";
import "./Tabs.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../../redux/tabs/sliceTabs";
import  description from '../../data/description.json';
const ID_LOCAL_KEY = "active-id";



export const Tabs = () => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.tabs.id);


  const handekClick = (e) => {
    // this.setState({
    //   id: e.target.id,
    // });

    // setId(e.target.id);
    dispatch(setId(e.target.id));
  };

  return (
    <div className="tabs">
      <ul className="tabs__caption">
        {description.map((item, index) => (
          <li
            className={item.id === id ? "active" : ''}
            onClick={handekClick}
            id={item.id}
            key={item.id}
          >
            Вкладка номер {index + 1}
          </li>
        ))}
      </ul>
      {description.map((item) => (
        <div
          className={`tabs__content ${item.id === id ? "active" : ''}`}
          key={item.id}
        >
          {item.descriptions.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};
