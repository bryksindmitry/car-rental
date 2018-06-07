import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Car from '../Car'

export default class CarsList extends Component{
    static propTypes = {
        cars: PropTypes.array.isRequired
    }

    render(){

        const { cars } = this.props;


        return(
            <div className="cars-list">
                {this.countCars(cars)}
            </div>
        )
    }

    countCars = ( array, num = 0, list =[]) =>{
        if(num == array.length)return list;
        list.push(<div className="cars-list__item" key={array[num].id}>
                        <Car car={array[num]}/>
                  </div>);
        return this.countCars(array, num+1, list);

    }
}

