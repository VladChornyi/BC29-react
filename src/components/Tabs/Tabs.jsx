import { useState, useEffect } from "react";
import "./Tabs.css";
import PropTypes from "prop-types";
const ID_LOCAL_KEY = "active-id";
export const Tabs = ({ description }) => {
  // state = {
  //   id: this.props.description[0].id,
  // };

  const [id, setId] = useState(getSavedId);

  useEffect(() => {
    localStorage.setItem(ID_LOCAL_KEY, id);
  }, [id]);

  function getSavedId() {
    const savedId = localStorage.getItem(ID_LOCAL_KEY);

    if (savedId) {
      return savedId;
    }
    return description[0].id;
  }

  // componentDidMount() {
  //   const savedId = localStorage.getItem(ID_LOCAL_KEY);
  //   if (savedId) {
  //     this.setState({ id: savedId });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const { id } = this.state;
  //   if (prevState.id !== id) {
  //     localStorage.setItem(ID_LOCAL_KEY, id);
  //   }
  // }

  const handekClick = (e) => {
    // this.setState({
    //   id: e.target.id,
    // });

    setId(e.target.id);
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
