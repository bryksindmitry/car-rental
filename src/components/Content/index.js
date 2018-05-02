import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import WrapperOffers from '../../containers/WrapperOffers'
import CarsPage from '../CarsPage'
import Calculator from '../Calculator';
import CarList from '../CarsList'

class Content extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            <CarsPage/>
        )
    }
}

export default toggleOpen(Content);