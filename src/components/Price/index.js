import React, { Component } from 'react'

export default class Price extends Component{
    render(){
        return(
            <div className="price">
                <span className="price__from">
                    from
                </span>
                <span className="price__value">
                    $ 55.00
                </span>
            </div>
        )
    }
}