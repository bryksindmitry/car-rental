import React from 'react'
import PropTypes from 'prop-types'

 const CarProperty = ({type, quantity}) => {
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
    quantity: PropTypes.string.isRequired
}

export default CarProperty;