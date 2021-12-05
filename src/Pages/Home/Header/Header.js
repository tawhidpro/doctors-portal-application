import React from 'react';
import HeaderContent from './HeaderContent';
import Navber from './Navber';
import './header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;