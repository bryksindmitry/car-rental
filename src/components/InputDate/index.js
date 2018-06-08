import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputDate extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    static propTypes = {
        labelText: PropTypes.string,
        placeholder: PropTypes.string
    }

    render(){
        let {labelText, placeholder } = this.props;
        return(
            <div>
                <label className="filter__label">
                    {labelText}       
                </label>
                <input  type="date" 
                        className="date_input filter__input"
                        placeholder={placeholder}
                        onChange={this.handleChangeValue}
                        value={this.state.value}/> 
            </div>
        )
    }

    handleChangeValue = (ev) => {
        this.setState({
            value: ev.target.value
        })
    }
}