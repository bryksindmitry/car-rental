import React, { Component } from 'react';

export  default  class TextArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }


    render(){
        const {labelText, placeholder} = this.props;
        return(
             <div>
                 <label className="label">{labelText}</label>
                 <textarea className="textArea" placeholder={placeholder} value={this.state.value}></textarea>
             </div>
        )
    }

    handleChangeValue= (ev)=>{
        this.setState({
            value: ev.target.value
        })
    }
}