import React, { Component }  from 'react'

export default class CategoryList extends Component{
    render(){
        return(
            <div className="category">
                <div className="category__header">
                    <div className="category__title">
                            Speciall Offers
                    </div>
                    <div className="category__buttons">
                        <button className="category__button action__button">
                            All Offers
                        </button>
                        <button className="category__button">
                            Category 1
                        </button>
                        <button className="category__button">
                            Category 2
                        </button>
                        <button className="category__button">
                            Category 3
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}