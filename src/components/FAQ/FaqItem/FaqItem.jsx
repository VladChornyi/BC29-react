import PropTypes from 'prop-types';

export function FaqItem({title, description, isOpen}){
    return (<div className="accordion-item">
                  <p className={`title ${isOpen && "is-expanded"}`}>
                    {title}
                  </p>
                  <div className={`content ${isOpen && "is-expanded"}`}>
                    <p>{description}</p>
                  </div>
                </div>)
}

FaqItem.propTypes = {
    title: PropTypes.number,
    description: PropTypes.string,
    isOpen: PropTypes.bool,
}
