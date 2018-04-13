import React, { Component } from 'react'
import Price from '../Price'

export default class Offer extends Component{
    render(){   
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
                    <button className="offer__view-more">
                        + View Details
                    </button>
                    </div>
                </div>
            )
    }
}