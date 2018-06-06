import React from 'react'
import PropTypes from 'prop-types'

 const CarProperty = (props) => {
    const {type, quantity} = props;
    return(
        <div className="car-property">
            <span className="car-property__icon">
                <i className={`fas fa-${type}`}></i>
            </span>
            <span className="car-property__quantity">{quantity}</span>
        </div>
    )
}

CarProperty.propTypes = {
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CarProperty;