import React from 'react'
//  action__button if active
export default function CategoryButton(props){
    return(
        <button className="category__button" onClick={props.handleOnClick}> 
           {props.name}
        </button>
    )
}