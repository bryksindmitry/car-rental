import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputString extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }

    static propTypes = {
        labelText : PropTypes.string,
        placeholder : PropTypes.string
    }

    render(){

        let {labelText, placeholder} = this.props;

        return(
            <div>
                <label className="calculator__label">
                    {labelText}
                </label>
                <input  type="text"
                        className="address_input calculator__input" 
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