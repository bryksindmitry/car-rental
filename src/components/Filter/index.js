import React, { Component } from 'react';
import { connect } from "react-redux";
import {submitFilter} from "../../AC";

import InputDate from '../InputDate';
import InputString from '../InputString';
import InputSubmit from '../InputSubmit';


class Filter extends Component{
    constructor(props){
        super(props);
    }
     state = {
        checkIn:"",
        checkOut:"",
        location:""
    };
    render(){
        const { showFilter } = this.props;
        return(
            <div className={`filter ${showFilter ? "hide_filter" : ""}`}>
            <div className="filter__title">
                Find offers
            </div>
            <div className="filter__wrapper">
                <div className="filter__element">
                    <div className="filter__address">
                        <InputString handler = {value => this.state.location = value}
                                     labelText={"Pick-up Location"}
                                     placeholder={"City, State or Airport Code"} />
                    </div>
                </div>
                <div className="filter__date">
                    <div className="filter__element">
                        <InputDate  handler = {value => this.state.checkIn = value}
                                    labelText={"Pick-up Date and Time"}
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                    <div className="filter__element">
                        <InputDate  handler = {value => this.state.checkOut = value}
                                    labelText={"Return Date and Time"}
                                    placeholder={"dd/mm/yyyy"}/>
                    </div> 
                </div>
                <div className="filter__element">
                    <InputSubmit value={"Get A Quote Now"} handler = {this.handlerSubmit} />
                </div>
            </div>
        </div>   
        )
    }

    handlerSubmit = e => {
        e.preventDefault();
        const {submitFilter} = this.props;
        console.log(this.state)
        submitFilter(this.state);
    }
}

export default connect(state=>({
    filters: state.filters
}), {submitFilter})(Filter)