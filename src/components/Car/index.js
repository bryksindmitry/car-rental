import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import CarProperty from '../CarProperty';
import CarPrice from '../CarPrice';
import InputSubmit from '../InputSubmit';

export default class Car extends Component{

    static propTypes = {
       car: PropsTypes.shape({
           img: PropsTypes.string.isRequired,
           title: PropsTypes.string.isRequired,
           type: PropsTypes.string.isRequired,
           cost: PropsTypes.number.isRequired,
           property: PropsTypes.object.isRequired
       })

    }

    render(){
        const {img, title, type, cost, property} = this.props.car;
        return(
            <div className="car-item">
                <div className="car-item__image">
                    <img src={img}/>
                </div>
                <div className="car-item__details">
                    <div className="car-item__text">
                        <h2 className="car-item__title">
                            {title}
                        </h2>
                        <div className="car-item__description">
                            (Example of this range: {type} )
                        </div>
                    </div>
                    <div className="car-item__list-properties">
                        <CarProperty type={"users"} quantity={property.passengers}/>
                        <CarProperty type={"suitcase"} quantity={property.luggage}/>
                        <CarProperty type={"car"} quantity={property.dors}/>
                        <CarProperty type={"cogs"} quantity={property.transmission}/>
                    </div>
                </div>
                <button className="car-item__view-more">
                            + View Details
                </button>
                <div className="car-item__price">
                    <CarPrice price = {cost}/>
                    <div className="car-item__book">
                        <InputSubmit value={"Book Now"}/>
                    </div>
                </div>
            </div>
        )
    }
}