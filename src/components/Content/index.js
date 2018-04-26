import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import WrapperOffers from '../../containers/WrapperOffers'
import Calculator from '../Calculator';
import CarList from '../CarsList'

class Content extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        
                        <CarList/>
                    </div>
                    <div className="right-side">
                        <button className="calulator-toggle" type="button" onClick={toggleOpen}>Открыть фильтр</button>
                        <div className="right-side__calculator">
                            <Calculator showCalculator={isOpen}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default toggleOpen(Content);