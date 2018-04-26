import React, { Component } from 'react'
import toggleOpen from './decorators/toggleOpen'
import Header from './components/Header'
import Content from './components/Content'


class Main extends Component{
    render(){
        let {isOpen, toggleOpen} = this.props;
        return(
            <div>
            <Header  open={isOpen} toggleMenu={toggleOpen}/>
            <Content  menuIsOpen={isOpen}/>
            </div>
        )
    }
}
export default toggleOpen(Main)