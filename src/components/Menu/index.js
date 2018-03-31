import React from 'react'
import './style.scss'

export default function Menu(){
    return(
        <nav className="menu">
            <div className="menu__item"><a href="#" className="menu__link">Home</a></div>
            <div className="menu__item"><a href="#" className="menu__link">Special Offers</a></div>
            <div className="menu__item"><a href="#" className="menu__link">Cars</a></div>
            <div className="menu__item"><a href="#" className="menu__link">Locations</a></div>
            <div className="menu__item"><a href="#" className="menu__link">About</a></div>
            <div className="menu__item"><a href="#" className="menu__link">Contact</a></div>
        </nav>
    )
}