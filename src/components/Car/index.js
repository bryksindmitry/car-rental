import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export default class Car extends Component{

    static propTypes = {
       car: PropsTypes.shape({
           img: PropsTypes.string.isRequired,
           title: PropsTypes.string.isRequired,
           type: PropsTypes.string.isRequired,
           cost: PropsTypes.number.isRequired
       })

    }

    render(){
        const {img, title, type, cost} = this.props.car;
        return(
            <div className="car-item">
                <div className="car-item__image">
                    <img src={img}/>
                </div>
                <div className="car-item__text">
                    <h2 className="car__title">
                        {title}
                    </h2>
                    <div className="car-item__desctiption">
                        (Example of this range: {type} )
                    </div>
                </div>
                <button className="car-item__view-more">
                        + View Details
                </button>
                <div className="car-item__price">
                    <div className="price">
                        <span className="price__from">
                            from
                        </span>
                        <span className="price__value">
                            {`$ ${cost}.00`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}