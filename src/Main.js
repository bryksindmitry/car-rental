import React, { Component } from 'react'
import Header from './components/Header'
import Offers from './containers/Offers'

export default class Main extends Component{
    state = {
        open : false
    }

    render(){
        return(
            <div>
            <Header  open={this.state.open} toggleMenu={this.toggleMenu}/>
            
            <Offers open={this.state.open}/>
            </div>
        )
    }

    toggleMenu = ()=> {
        
        this.setState(() => {
            return {open: !this.state.open};
          })
    }
}