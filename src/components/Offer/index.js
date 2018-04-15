import React, { Component } from 'react'
import Price from '../Price'

export default class Offer extends Component{

    state = {
        open : false
    }

    render(){   
        let {title, description, minPrice, details} = this.props.data;
        let {open} = this.state;
        let detailNode =  this.state.open ? <div className ="offer__detail">
            <p>{details}</p>
        </div> : "";

        let textButton = open ? " - Hide Details":"+ View Details"

        return(
                <div className="offer-item">
                    <div className="item-wrapper">
                    <Price price={minPrice}/>
                    <div className="offer__text">
                        <div className="offer__title">
                            {title} 
                        </div>
                        <div className="offer__description">
                            {description}
                        </div>
                    </div>
                    <button className="offer__view-more" onClick={ this.handleToggle }>
                        { textButton }  
                    </button>
                    { detailNode }
                    </div>
                </div>
            )
    }

    handleToggle = ()=>{
        this.setState(()=>{
            return {
                open : !this.state.open
            }
        })
    }
}