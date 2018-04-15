import React from 'react';

const MenuList = ["Home", "Special Offers", "Cars", "Locations", "About", "Contact"];

export default function Menu(){
    return(
        <nav className="menu">
            {
                MenuList.map((item)=><div className="menu__item" key={item}><a href={item} className="menu__link">{item}</a></div>)
            }
        </nav>
    )
}