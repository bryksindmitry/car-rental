import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Menu from '../Menu';
import Entrance from '../Entrance';


const Header = (props) => {
    let  {toggleMenu, open}  = props;
    return(
        <div className="App-header">
            <header className="header">
                <div className={`header__wrapper ${open ? "header__wrapper--active-menu" : ""}`}>
                    <div className="header__logo">
                        <button className="menu-toggle" type="button" onClick={toggleMenu}></button>
                        <Logo/> 
                    </div>
                    <div className="header__menu">
                        <Menu/>
                    </div>
                    <div className="header__control">   
                        <Entrance/>
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.propTypes = {
    toggleMenu : PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}

export default Header;