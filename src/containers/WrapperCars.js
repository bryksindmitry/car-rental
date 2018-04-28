import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";
import VehiclesCategories from "../components/VehiclesCategories";
import CarsList  from '../components/CarsList'
import {filteredOffersSelector} from "../selectors";
import Pagination from '../components/Pagination';


class WrapperCars extends Component{
    render(){
        const { offers, changeCategory, changePage} = this.props;

        return(
            <div>
                <VehiclesCategories changeCategory = {changeCategory}/>
                <CarsList offers={offers.offersPage}/>
                <Pagination currentPage={offers.page} countPages={offers.allPagesLength} returnPageNumber = { changePage }/>
            </div>
        )
    }
}

export default connect(state=>({

    offers: filteredOffersSelector(state),

}), {changeCategory, changePage})(WrapperCars)