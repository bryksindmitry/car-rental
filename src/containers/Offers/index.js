import React, { Component } from 'react';
import CategoryList from '../../components/CategoryList';
import OffersList from '../../components/OffersList';
import Calculator from '../../components/Calculator';

export default class Offers extends Component{
    state = {
        open : false
    }
    render(){
        
        return(
            <div className={`main ${this.props.open ? "hide_main" : "" }`}>
                <div className="wrapper main__wrapper">
                    <div className="main-content">
                        <CategoryList/>
                        <OffersList/>    
                    </div>
                    <div className="right-side">
                        <button className="calulator-toggle" type="button" onClick={this.handleShowCalculator}>Открыть фильтр</button>
                        <div className="right-side__calculator">
                            <Calculator showCalculator={this.state.open}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    handleShowCalculator = () => {
        this.setState(()=>{
           return { open: !this.state.open }
        })
    }
}