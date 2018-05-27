import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CarProperty extends Component{
    render(){
        const {type, quantity} = this.props;
        return(
            <div className="car-property">
                <span className="car-property__icon">
                    <i className={`fas fa-${type}`}></i>
                </span>
               <span className="car-property__quantity">{quantity}</span>
            </div>
        )
    }
}