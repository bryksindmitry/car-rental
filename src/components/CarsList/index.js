import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Car from '../Car'
export default class CarsList extends Component{
    static propTypes = {

    }

    render(){
        return(
            <div className="cars-list">
            <div className="cars-list__item">
                <Car/>
            </div>
            <div className="cars-list__item">
                <Car/>
            </div>
            </div>
        )
    }
}