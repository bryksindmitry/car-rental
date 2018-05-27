import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function CarPrice(props){
        return(
            <div className="price--light">
                <span className="price--light__from">
                    Price:
                </span>
                <span className="price--light__value">
                    {`$ ${props.price}.00`}
                </span>
            </div>
        )
}

CarPrice.PropTypes = {
    price : PropTypes.number.isRequired
}