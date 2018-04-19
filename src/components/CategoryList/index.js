import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { changeCategory } from '../../AC'
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
                        <CategoryButton name={"All Offers"} category={0} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 1"} category={1} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 2"} category={2} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"Category 3"} category={3} handleOnClick={ this.handleCategoryButton }/>
                    </div>
                </div>
            </div>
        )
    }
    handleCategoryButton = (categoryNum)=>{
        console.log(categoryNum)
        this.props.changeCategory(categoryNum)
    };


}
 
export default connect(null, {changeCategory})(CategoryList)