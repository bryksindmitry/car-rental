import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import CarsPage from '../CarsPage';
import OffersPage from '../OffersPage';
import Locations from '../Locations';
import About from '../About';

class Content extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            //<CarsPage/>
          // <OffersPage/>
          //  <Locations/>
            <About/>
        )
    }
}

export default toggleOpen(Content);