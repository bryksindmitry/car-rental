import React, { Component } from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import Entrance from '../Entrance'


export default class Header extends Component{
    render(){
        return(
            <div className="App-header">
                <header className="header">
                    <div className="wrapper">
                        <div className="header__logo">
                          <Logo/> 
                        </div>
                        <div className="header__menu">
                            <Menu/>
                        </div>
                        <div className="header__control">
                            <Entrance/>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
