import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Car from '../Car'
export default class CarsList extends Component{
    static propTypes = {

    }

    render(){
        const { cars } = this.props;
        let carsList = cars.map( car => {
            return(
                <div className="cars-list__item" key={car.id}>
                    <Car car={car}/>
                </div>
            )
        })
        return(
            <div className="cars-list">
                {carsList}
            </div>
        )
    }
}