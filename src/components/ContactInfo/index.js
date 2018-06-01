import React, { Component } from 'react';

export default class ContactInfo extends Component{
    render(){
        return(
            <div className="information">
                <div className="information__image">
                    <i className="fas fa-phone-square"></i>
                </div>
                <div className="information__description">
                    <div className="information__title">
                        Phone:
                    </div>
                    <div className="information__text">
                        123456789
                    </div>
                </div>
            </div>
        )
    }
}