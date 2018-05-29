import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";
import LocationButton from "../components/LocationsButtons";
import CarsList  from '../components/CarsList'
import {filteredCarsSelector} from "../selectors";
import LocationsList from "../components/LocationsList";

class WrapperLocations extends Component{
    render(){
        const { cars, changeCategory, changePage } = this.props;
        return(
            <div>
                <LocationButton/>
                <LocationsList/>
            </div>
        )
    }
}

export default connect(state=>({

    cars: filteredCarsSelector(state)

}), {changeCategory, changePage})(WrapperLocations)