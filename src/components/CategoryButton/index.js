import React, { Component } from 'react'

//  action__button if active
export default class CategoryButton extends Component{
    render() {
        return (
            <button className="category__button" onClick={this.handleClick}>
                {this.props.name}
            </button>
        )
    }

    handleClick = () =>{
        return this.props.handleOnClick(this.props.category);
    }
}