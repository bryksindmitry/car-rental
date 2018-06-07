import React from 'react';
import PropTypes from 'prop-types';

 const Price = ({price}) => {
    return(
        <div className="price">
            <span className="price__from">
                from
            </span>
            <span className="price__value">
                {`${price}.00$`}
            </span>
        </div>
    )
}

Price.PropTypes = {
    price : PropTypes.number.isRequired
}
export default Price