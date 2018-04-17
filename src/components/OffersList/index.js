import React, { Component } from 'react';
import Offer from '../Offer';
import { connect } from 'react-redux';

class OffersList extends Component{
    render(){
        return(
            <div className="offers-list">
                { this.props.offers.map((item)=> <Offer key= {item.id} data={item}/>) }
            </div>
        )
    }
}
export default connect((state)=>({
    offers: state.offers
}))(OffersList)
