import React, { Component }  from 'react'
import { connect } from 'react-redux'
import {changeCategory} from '../../AC'
import CategoryButton from '../CategoryButton'

class CategoryList extends Component{
    render(){
        return(
            <div className="category">
                <div className="category__header">
                    <div className="category__title">
                            Speciall Offers
                    </div>
                    <div className="category__buttons">
                        <CategoryButton name={"All Offers"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 1"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 2"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 3"} handleOnClick={ this.handleCategoryButton }/>
                    </div>
                </div>
            </div>
        )
    }
    handleCategoryButton = ()=>{
     
        changeCategory(1)
    }
}

export default connect(null,{ changeCategory })(CategoryList)