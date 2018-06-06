import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = (props) => {
    return(
        <div className="information">
            <div className="information__image">
                <i className="fas fa-phone-square"></i>
            </div>
            <div className="information__description">
                <div className="information__title">
                    {`${props.title}:`}
                </div>
                <div className="information__text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}
ContactInfo.defaultProps ={
    title: "Phone",
    text: '123456789'
};

ContactInfo.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ContactInfo;
