import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Advertising extends Component{
    static propTypes = {
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired
    }
    render(){
        const {type, title, description, button} = this.props;
        return(
            <div className="advertising">
                <div className="advertising__header">
                    <div className="advertising__image">
                        <i className={`fas fa-${type}`}></i>
                    </div>
                    <div className="advertising__title">
                        {title}
                    </div>
                </div>
                <div className="advertising__description">
                    {description} 
                </div>
                <div className="advertising__button">
                    <button className="ad_button">{button}</button>
                </div>
            </div>
        )
    }
}