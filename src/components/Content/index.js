import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import WrapperOffers from '../../containers/WrapperOffers'
import CarsPage from '../CarsPage'
import OffersPage from '../OffersPage'

class Content extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            //<CarsPage/>
            <OffersPage/>
        )
    }
}

export default toggleOpen(Content);