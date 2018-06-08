import React, { Component } from 'react';
import WrapperOffers from '../../containers/WrapperOffers'
import WrapperAdvertising from '../../containers/WrapperAdvertising'
import Filter from '../Filter';

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
                        <button className="filter-toggle" type="button" onClick={toggleOpen}>Открыть фильтр</button>
                        <div className="right-side__filter">
                            <Filter showFilter={isOpen}/>
                            <div className="right-side__advertising">
                                <WrapperAdvertising repeats={3}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OffersPage;