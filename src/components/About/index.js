import React, { Component } from 'react';
import WrapperAbout from '../../containers/WrapperAbout'
import WrapperAdvertising from '../../containers/WrapperAdvertising';

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
                            <WrapperAdvertising repeats={4}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}