import React, { Component } from 'react';
import CategoryList from '../CategoryList';
import OffersList from '../OffersList';
import Calculator from '../Calculator';
export default class Content extends Component{
    render(){
        return(
            <div className="main">
                <div className="wrapper main__wrapper">
                    <CategoryList/>
                    <div className="main-content">
                        <OffersList/>   
                        <div className="right-side">
                          <Calculator/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}