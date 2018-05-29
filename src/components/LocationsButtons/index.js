import React, { Component } from 'react';
import CategoryButton from '../CategoryButton';

export default class  LocationsButtons extends Component{
    render() {
        return (
            <div className="category">
                <div className="category__header">
                    <div className="category__title">
                        Locations
                    </div>
                    <div className="category__buttons">
                        <CategoryButton name={"A-E"} category={null} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"F-J"} category={null} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"K-O"} category={"Small"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"P-T"} category={"Medium"} handleOnClick={ this.handleCategoryButton }/>
                        <CategoryButton name={"U-Z"} category={"Large"} handleOnClick={ this.handleCategoryButton }/>
                    </div>
                </div>
            </div>
        )
    }
}