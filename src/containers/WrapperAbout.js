import React, { Component } from 'react';
import {connect} from "react-redux";
import {changeCategory, changePage} from "../AC";

import {filteredCarsSelector} from "../selectors";
import AboutHeader from "../components/AboutHeader";
import AboutArticle from "../components/AboutArticle";

class WrapperAbout extends Component{
    render(){
        const { cars, changeCategory, changePage } = this.props;
        return(
            <div>
                <AboutHeader/>
                <AboutArticle/>
            </div>
        )
    }
}

export default connect(state=>({

    cars: filteredCarsSelector(state)

}), {changeCategory, changePage})(WrapperAbout)