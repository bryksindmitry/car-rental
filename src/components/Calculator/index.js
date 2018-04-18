import React, { Component } from 'react';
import InputDate from '../InputDate';
import InputString from '../InputString';
import InputSubmit from '../InputSubmit';

export default class Calculator extends Component{
    constructor(props){
        super(props);
        state = {
            city:"",
            checkIn:"",
            checkOut:""
        }
    }
    render(){
        return(
            <div className={`calculator ${this.props.showCalculator ? "hide_calculator" : ""}`}>
            <div className="calculator__title">
                Find offers
            </div>
            <div className="calculator__wrapper">
                <div className="calculator__element">
                    <div className="calculator__address">
                        <InputString labelText={"Pick-up Location"} placeholder={"City, State or Airport Code"} />
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
                    <InputSubmit value={"Get A Quote Now"}/>
                </div>
            </div>
        </div>   
        )
    }
}