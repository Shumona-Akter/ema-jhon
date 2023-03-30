import React from 'react';
import './Header.css'
import logo from '../images/Logo.svg';

const Header = () => {
    return (
        <header>
            <nav className='menu-part'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Order">Order</a>
                    <a href="/Review">Order Review</a>
                    <a href="/Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;