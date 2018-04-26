import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";
import CategoryList from "../components/CategoryList";

import OffersList  from '../components/OffersList'
import {filteredOffersSelector} from "../selectors";


import Pagination from '../components/Pagination';


class WrapperOffers extends Component{
    render(){
        console.log(this.props);
        const {offers, changeCategory, changePage} = this.props;
        return(
            <div>
                <CategoryList changeCategory = {changeCategory}/>
                <OffersList offers={offers[0]}/>
                <Pagination pages={offers.length} changePage = { changePage }/>
            </div>
        )
    }
}


export default connect(state=>({
    offers: filteredOffersSelector(state)
}), {changeCategory, changePage})(WrapperOffers)