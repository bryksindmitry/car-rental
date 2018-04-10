import React, { Component } from 'react';
import CategoryList from '../CategoryList';
import OffersList from '../OffersList';
import Calculator from '../Calculator';
export default class Content extends Component{
    render(){
        return(
            <div className="main">
               
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <CategoryList/>
                        <OffersList/>    
                    </div>
                    <div className="right-side">
                        <button className="calulator-toggle" type="button">Открыть фильтр</button>
                        <Calculator/>
                    </div>
                </div>
            </div>

        )
    }
}