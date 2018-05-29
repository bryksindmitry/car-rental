import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import CarsPage from '../CarsPage'
import OffersPage from '../OffersPage'
import Locations from '../Locations'

class Content extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            //<CarsPage/>
          // <OffersPage/>
            <Locations/>
        )
    }
}

export default toggleOpen(Content);