import React, { Component } from 'react'
import Price from '../Price'

export default class Offer extends Component{

    state = {
        open : false
    }

    render(){   

        let {open} = this.state;
        let detailNode =  this.state.open ? <div className ="offer__detail">
            <p>Вы решили, что вы будете работать над проблемой №53 из системы отслеживания ошибок, используемой вашей компанией. Разумеется, Git не привязан к какой-то определенной системе </p>
        </div> : "";

        let textButton = open ? " - Hide Details":"+ View Details"

        return(
                <div className="offer-item">
                    <div className="item-wrapper">
                    <Price/>
                    <div className="offer__text">
                        <div className="offer__title">
                            Duis sed odio sit amet nibh vulputate cursus 
                        </div>
                        <div className="offer__description">
                            Nam nec tellus a odio tincidunt auctor a ornare odio
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