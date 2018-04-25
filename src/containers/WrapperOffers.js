import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory} from "../AC";
import CategoryList from "../components/CategoryList";

import OffersList  from '../components/OffersList'
import {filteredOffersSelector} from "../selectors";


import Pagination from '../components/Pagination';


class WrapperOffers extends Component{
    render(){
        const {offers, changeCategory} = this.props;
        return(
            <div>
                <CategoryList changeCategory = {changeCategory}/>
                <OffersList offers={offers}/>
                <Pagination pages={Math.ceil(offers.length/10)}/>
            </div>
        )
    }
}


export default connect(state=>({
    offers: filteredOffersSelector(state)
}), {changeCategory})(WrapperOffers)