import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";
import VehiclesCategories from "../components/VehiclesCategories";
import CarsList  from '../components/CarsList'
import {filteredCarsSelector} from "../selectors";
import Pagination from '../components/Pagination';


class WrapperCars extends Component{
    render(){
        console.log(this.props);
        const { cars, changeCategory, changePage } = this.props;
        console.log(cars);
        return(
            <div>
                <VehiclesCategories changeCategory={changeCategory} />
                <CarsList cars={cars.carsPage}/>
                <Pagination currentPage={cars.page} countPages={cars.allPagesLength} returnPageNumber = { changePage }/>
            </div>
        )
    }
}

export default connect(state=>({

    cars: filteredCarsSelector(state)

}), {changeCategory, changePage})(WrapperCars)