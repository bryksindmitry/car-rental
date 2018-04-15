import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import CategoryList from '../../components/CategoryList';
import OffersList from '../../components/OffersList';
import Calculator from '../../components/Calculator';

class Offers extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <CategoryList/>
                        <OffersList/>    
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

export default toggleOpen(Offers);