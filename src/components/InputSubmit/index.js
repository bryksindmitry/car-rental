import React, { Component } from "react";
import PropTypes from "prop-types";
import InputString from "../InputString/index";

export default function InputSubmit(props){
    let {value} = props;
    return(
        <input type="submit" value={value} className="calculator__button"/>
    )
}

InputString.propTypes = {
    value: PropTypes.string.isRequired
}