import React, { Component } from "react";
import PropTypes from "prop-types";

export default function InputSubmit(props){
    let {value} = props;
    return(
        <input type="submit" value={value} className="inputSubmit"/>
    )
}

InputSubmit.propTypes = {
    value: PropTypes.string.isRequired
}