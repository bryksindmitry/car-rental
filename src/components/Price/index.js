import React, { Component } from 'react'

export default function Price(props){
        return(
            <div className="price">
                <span className="price__from">
                    from
                </span>
                <span className="price__value">
                    {props.price}
                </span>
            </div>
        )
}