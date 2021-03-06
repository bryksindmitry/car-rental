import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";

import {filteredCarsSelector} from "../selectors";
import LocationsList from "../components/LocationsList";
import LocationButton from "../components/LocationsButtons";

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