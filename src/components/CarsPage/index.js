import React, { Component } from 'react';
import WrapperCars from '../../containers/WrapperCars'
import Advertising from '../Advertising'

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
                            <Advertising type={"flag"} title={"Rental Locations"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet "}  button={"Find Location Now"} />
                        </div>
                        <div className="right-side__advertising">
                            <Advertising type={"flag"} title={"Rental Locations"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet "}  button={"Find Location Now"} />
                        </div>
                        <div className="right-side__advertising">
                            <Advertising type={"flag"} title={"Rental Locations"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet "}  button={"Find Location Now"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}