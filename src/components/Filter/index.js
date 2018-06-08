import React, { Component } from 'react';
import InputDate from '../InputDate';
import InputString from '../InputString';
import InputSubmit from '../InputSubmit';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:"",
            checkIn:"",
            checkOut:""
        }
    }
    render(){
        return(
            <div className={`filter ${this.props.showFilter ? "hide_filter" : ""}`}>
            <div className="filter__title">
                Find offers
            </div>
            <div className="filter__wrapper">
                <div className="filter__element">
                    <div className="filter__address">
                        <InputString labelText={"Pick-up Location"} placeholder={"City, State or Airport Code"} />
                    </div>
                </div>
                <div className="filter__date">
                    <div className="filter__element">
                        <InputDate  labelText={"Pick-up Date and Time"} 
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                    <div className="filter__element">
                        <InputDate  labelText={"Return Date and Time"} 
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                </div>
                <div className="filter__element">
                    <InputSubmit value={"Get A Quote Now"}/>
                </div>
            </div>
        </div>   
        )
    }
}