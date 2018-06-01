import React, { Component } from 'react';
import Advertising from '../Advertising';
import Contact from '../Contact';
import ContactInfo from '../ContactInfo';

export default class ContactPage extends Component{
    render(){
        const {menuIsOpen} = this.props;
        return(
            <div className={`main ${menuIsOpen ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <div className="">
                            <Contact/>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-side__advertising">
                            <ContactInfo/>
                        </div>
                        <div className="right-side__advertising">
                            <ContactInfo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}