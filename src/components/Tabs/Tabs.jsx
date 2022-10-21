import { Component } from "react";
import './Tabs.css';
import PropTypes from 'prop-types'

export class Tabs extends Component {
    state = {
        active: false,
    };


    render() {
        return (
            <div className="tabs">

                <ul className="tabs__caption">
                    {this.props.description.map((item, index) => (<li className="active" key={item.id}>Вкладка номер {index + 1}</li>))}
                </ul>
                {this.props.description.map(({ descriptions, id }) => (
                    <div className="tabs__content active" key={id}>{descriptions.map(elem => (<p key={elem}>{elem}</p>))}</div>
                ))}

            </div>
        );
    };
}

Tabs.propTypes = {
    description: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }))
}