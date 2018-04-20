import React, { Component } from 'react';
import Offer from '../Offer';


export  default class OffersList extends Component{
    render(){
        return(
            <div className="offers-list">
                { this.props.offers.map((item)=> <Offer key= {item.id} data={item}/>) }
            </div>
        )
    }
}

