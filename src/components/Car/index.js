import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Car extends Component{
    render(){
        return(
            <div className="car-item">
                        <div className="car-item__image">
                            <img src="http://fakeimg.pl/210x140/"/>
                        </div>
                        <div className="car-item__text">
                            <h2 className="car__title">
                                Small: Economy
                            </h2>
                            <div className="car-item__desctiption">
                                (Example of this range: )
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
                                    $ 55.00
                                </span>
                            </div>
                        </div>
            </div>
        )
    }
}