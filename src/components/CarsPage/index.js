import React, { Component } from 'react';
import WrapperCars from '../../containers/WrapperCars'
import WrapperAdvertising from '../../containers/WrapperAdvertising'
export default class CarsPage extends Component{
    render(){
        const {menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <WrapperCars/>
                    </div>
                    <div className="right-side">
                        <div className="right-side__advertising">
                          <WrapperAdvertising repeats={3}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}