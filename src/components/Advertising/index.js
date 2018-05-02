import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Advertising extends Component{
    render(){
        return(
            <div className="advertising">
                <div className="advertising__title">
                    Special offers
                </div>
                <div className="advertising__description">
                    Duis sed odio sit amet nibh 
                    vulputate cursus a sit amet 
                </div>
                <div className="advertising__button">
                    <button className="ad_button">Find Offers Now</button>
                </div>
            </div>
        )
    }
}