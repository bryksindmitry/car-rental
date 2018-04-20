import React, { Component } from 'react';
import OffersList  from '../components/OffersList'
import {filteredOffersSelector} from "../selectors";
import {connect} from "react-redux";

class WrapperOffersList extends  Component{
    render(){
        return(
            <div>
                <OffersList offers={this.props.offers}/>
            </div>
        )
    }
}

export default connect(state=>({
    offers: filteredOffersSelector(state)
}))(WrapperOffersList)
