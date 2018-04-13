import React, { Component } from 'react'
import Header from './Header/index'
import Content from './Content'

export default class Main extends Component{
    state = {
        open : false
    }

    render(){
        return(
            <div>
            <Header  open={this.state.open} toggleMenu={this.toggleMenu}/>
            { !this.state.open ? <Content/> : "" }
            </div>
        )
    }

    toggleMenu = ()=> {
        
        this.setState((prevState, props) => {
            return {open: !this.state.open};
          })
    }
}