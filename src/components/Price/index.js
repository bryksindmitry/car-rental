import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Price(props){
        return(
            <div className="price">
                <span className="price__from">
                    from
                </span>
                <span className="price__value">
                    {`${props.price}.00$`}
                </span>
            </div>
        )
}

Price.PropTypes = {
    price : PropTypes.number.isRequired
}