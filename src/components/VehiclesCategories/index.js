import React, { Component }  from 'react'
import { changeCategory } from '../../AC'
import CategoryButton from '../CategoryButton'

export default  class VehiclesCategories extends Component{
    render(){
        return(
            <div className="category">
                <div className="category__header">
                    <div className="category__title">
                        Cars
                    </div>
                    <div className="category__buttons">
                        <CategoryButton name={"All"} category={null} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Small"} category={"Small"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Medium"} category={"Medium"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Large"} category={"Large"} handleOnClick={ this.handleCategoryButton }/>
                    </div>
                </div>
            </div>
        )
    }
    handleCategoryButton = (numCategory)=>{
        let { changeCategory } = this.props;
        changeCategory(numCategory)
    };


}

