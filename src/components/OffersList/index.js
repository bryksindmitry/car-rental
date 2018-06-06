import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Offer from '../Offer';


const OffersList = ({offers}) => {
    return(
        <div className="offers-list">
            { offers.map((item)=> <Offer key= {item.id} data={item}/>) }
        </div>
    ) 
}
OffersList.propTypes = {
    offers: PropTypes.array.isRequired
}
export  default OffersList;
