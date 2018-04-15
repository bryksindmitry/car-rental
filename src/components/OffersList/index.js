import React, { Component } from 'react'
import Offer from '../Offer'
import  data from '../../data'

export default class OffersList extends Component{
    render(){
        return(
            <div className="offers-list">
                {data.offers.map((item)=> <Offer data={item}/>)}
            </div>
        )
    }
}