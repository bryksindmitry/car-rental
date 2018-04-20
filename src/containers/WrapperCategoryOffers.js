import React , { Component } from 'react';
import {changeCategory} from "../AC";
import {connect} from "react-redux";
import CategoryList from "../components/CategoryList"

class WrapperCategoryOffers extends Component{
    render(){
        return(
            <div>
                <CategoryList changeCategory = { this.props.changeCategory}/>
            </div>
        )
    }
}


export default connect(null, {changeCategory})(WrapperCategoryOffers)