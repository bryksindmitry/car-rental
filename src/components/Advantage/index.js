import React from 'react';
import PropTypes from 'prop-types';

const Advantage = ({ type, title, text}) => {
    return(
        <div className="advantage">
            <div className="advantage__image">
                <i className={`fas fa-${type}`}></i>
            </div>
            <div className="advantage__description">
                <div className="advantage__title">
                    {title}
                </div>
                <div className="advantage__text">
                    {text}
                </div>
            </div>
        </div>
    )
};

Advantage.propTypes = {
    type : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export  default  Advantage