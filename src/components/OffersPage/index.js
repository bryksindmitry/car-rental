import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen'
import WrapperOffers from '../../containers/WrapperOffers'
import Calculator from '../Calculator';
import CarList from '../CarsList'
import Advertising from '../Advertising';
class OffersPage extends Component{
    render(){
        let {isOpen, toggleOpen, menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">

                        <WrapperOffers/>
                    </div>
                    <div className="right-side">
                        <button className="calulator-toggle" type="button" onClick={toggleOpen}>Открыть фильтр</button>
                        <div className="right-side__calculator">
                            <Calculator showCalculator={isOpen}/>
                            <div className="right-side__advertising">
                                <Advertising type={"mobile-alt"} title={"Go Mobile"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet"} button={"Download App Now"}/>
                            </div>
                            <div className="right-side__advertising">
                                <Advertising type={"flag"} title={"Rental Locations"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet "}  button={"Find Location Now"} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default toggleOpen(OffersPage);