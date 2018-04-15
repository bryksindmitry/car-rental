import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen'
import Price from '../Price';


class Offer extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        data: PropTypes.shape({
            title:PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            minPrice: PropTypes.number.isRequired,
            details:PropTypes.string.isRequired
        }).isRequired
    }

    render(){   
        let {title, description, minPrice, details} = this.props.data;
        let {isOpen, toggleOpen} = this.props;
        let detailNode =  isOpen ? <div className ="offer__detail">
            <p>{details}</p>
        </div> : "";

        let textButton = isOpen ? " - Hide Details":"+ View Details"

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
                    <button className="offer__view-more" onClick={toggleOpen}>
                        { textButton }  
                    </button>
                    { detailNode }
                    </div>
                </div>
            )
    }
}

export default toggleOpen(Offer);