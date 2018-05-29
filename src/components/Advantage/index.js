import React, { Component } from 'react'

export  default  class Advantage extends Component{
    render(){
        return(
            <div className="advantage">
                <div className="advantage__image">
                    <i className="fas fa-laptop"></i>
                </div>
                <div className="advantage__description">
                    <div className="advantage__title">
                        Proin gravida nibh
                    </div>
                    <div className="advantage__text">
                        Aenean sollicitudin, lorem quis bibendum
                    </div>
                </div>
            </div>
        )
    }
}