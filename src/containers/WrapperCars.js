import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";
import VehiclesCategories from "../components/VehiclesCategories";
import CarsList  from '../components/CarsList'
import {filteredCarsSelector} from "../selectors";
import Pagination from '../components/Pagination';


class WrapperCars extends Component{
    render(){
        const { cars, changeCategory } = this.props
        return(
            <div>
                <VehiclesCategories changeCategory={changeCategory} />
                <CarsList cars={cars}/>

            </div>
        )
    }
}

export default connect(state=>({

    cars: state.cars

}), {changeCategory, changePage})(WrapperCars)