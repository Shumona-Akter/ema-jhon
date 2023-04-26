import React, { useContext } from 'react';
import './Header.css'
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../Component/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(authContext)
    console.log(user)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            console.log("log out")
        })
        .catch(err=>{
            console.log(err)
        })
    }
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
                    {
                        user && <span className='welcome'>welcome {user.email} <button onClick={handleLogOut}>sign out</button></span> 
                    }
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;