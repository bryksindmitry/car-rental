import React, { Component } from 'react'
import InputDate from '../InputDate'

export default class Calculator extends Component{
    render(){
        return(
            <div className={`calculator ${this.props.showCalculator ? "hide_calculator" : ""}`}>
            <div className="calculator__title">
                Find offers
            </div>
            <div className="calculator__wrapper">
                <div className="calculator__element">
                    <div className="calculator__address">
                <label className="calculator__label">
                    Pick-up Location
                </label>
                <input className="address_input calculator__input" placeholder="City, State or Airport Code"/>
                    </div>
                </div>
                <div className="calculator__date">
                    <div className="calculator__element">
                        <InputDate  labelText={"Pick-up Date and Time"} 
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                    <div className="calculator__element">
                        <InputDate  labelText={"Return Date and Time"} 
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                </div>
                <div className="calculator__element">
                    <input type="submit" value="Get A Quote Now" className="calculator__button"/>
                </div>
            </div>
        </div>   
        )
    }
}