import React, { Component }  from 'react'
import CategoryButton from '../CategoryButton'
export default class CategoryList extends Component{
    render(){
        return(
            <div className="category">
                <div className="category__header">
                    <div className="category__title">
                            Speciall Offers
                    </div>
                    <div className="category__buttons">
                        <CategoryButton name={"All Offers"}/>
                        <CategoryButton name={"Category 1"}/>
                        <CategoryButton name={"Category 2"}/>
                        <CategoryButton name={"Category 3"}/>
                    </div>
                </div>
            </div>
        )
    }
}