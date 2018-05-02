import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import WrapperCars from '../../containers/WrapperCars'
import Advertising from '../Advertising'

export default class CarsPage extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <WrapperCars/>
                    </div>
                    <div className="right-side">
                        <div className="right-side__advertising">
                            <Advertising/> 
                        </div>
                        <div className="right-side__advertising">
                            <Advertising/> 
                        </div>
                        <div className="right-side__advertising">
                            <Advertising/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}