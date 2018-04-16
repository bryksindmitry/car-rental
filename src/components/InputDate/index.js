import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputDate extends Component{
    constructor(props){
        super(props)
    }

    static propTypes = {
        labelText: PropTypes.string,
        placeholder: PropTypes.string
    }

    render(){
        let {labelText, placeholder } = this.props;
        return(
            <div>
                <label className="calculator__label">
                    {labelText}       
                </label>
                <input type="date" className="date_input calculator__input"  placeholder={placeholder}/> 
            </div>
        )
    }
}