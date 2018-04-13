import React, { Component } from 'react'


export default class Calculator extends Component{
    render(){
        return(
            <div className="calculator" style={{display:this.props.showCalculator ? "block" : "none"}}>
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
                        <label className="calculator__label">
                            Pick-up Date and Time
                        </label>
                        <input type="date" className="date_input calculator__input"  placeholder="dd/mm/yyyy"/>
                    </div> 
                    <div className="calculator__element">
                        <label className="calculator__label">
                            Return Date and Time
                        </label> 
                        <input type="date" className="date_input calculator__input" placeholder="dd/mm/yyyy"/>
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