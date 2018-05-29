import React, { Component } from 'react';
import Advertising from '../Advertising';
import WrapperAbout from '../../containers/WrapperAbout'


export default class About extends Component{
    render(){
        const {menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <div className="">
                            <WrapperAbout/>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-side__advertising">
                            <Advertising type={"mobile-alt"} title={"Go Mobile"} description={"Duis sed odio sit amet nibh vulputate cursus a sit amet"} button={"Download App Now"}/>
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