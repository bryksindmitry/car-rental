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

        const {type, labelText, placeholder} = this.props;

        return(
            <div>
                <label className="filter__label">
                    {labelText}
                </label>
                <input  type={type}
                        className="address_input filter__input"
                        placeholder={placeholder} 
                        onChange={this.handleChangeValue}
                        value={this.state.value}/>
            </div>
        )
    }
    handleChangeValue = (ev) => {
        this.setState({
            value: ev.target.value
        });
        console.log()
        //console.log(this.state.value)
        const {handler} = this.props;
        handler(ev.target.value);
    }

}