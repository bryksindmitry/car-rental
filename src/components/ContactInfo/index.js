import React, { Component } from 'react';

export default class ContactInfo extends Component{
    render(){
        return(
            <div className="information">
                <div class="information__image">
                    <i class="fas fa-phone-square"></i>
                </div>
                <div class="information__text">
                    <div class="title">
                        Phone:
                    </div>
                    <div class="value">
                        123456789
                    </div>
                </div>
            </div>
        )
    }
}