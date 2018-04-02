import React, { Component } from 'react'
import Offer from '../Offer'

export default class OffersList extends Component{
    render(){
        let num = 10; // temporary count for offers;
        let listOffers = [];
        for(let i = 0; i < 10; i++){
            listOffers.push(<Offer/>)
        }
        return(
            <div className="offers-list">
                  {listOffers}
            </div>
        )
    }
}