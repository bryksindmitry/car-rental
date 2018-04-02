import React from 'react'


export default function Offer(){
        return(
            <div className="offer-item">
                <div className="item-wrapper">
                        <div className="price">
                    <span className="price__from">
                        from
                    </span>
                    <span className="price__value">
                        $ 55.00
                    </span>
                </div>
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