import React from 'react';
import PropTypes from 'prop-types';

const CarPrice = ({price}) =>{
        return(
            <div className="price--light">
                <span className="price--light__from">
                    Price:
                </span>
                <span className="price--light__value">
                    {`$ ${price}.00`}
                </span>
            </div>
        )
}

CarPrice.propTypes = {
    price : PropTypes.number.isRequired
}

export default CarPrice;