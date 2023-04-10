import React from 'react';
import './Header.css'
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='menu-part'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/oder">Order</Link>
                    <Link to="/review"> Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;