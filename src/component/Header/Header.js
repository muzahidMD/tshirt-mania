import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to TShirt Mania!!!</h1>
            <nav>
                <Link to="/">Home</Link >
                <Link to="/orderreview">Order Review</Link>
                <Link to="/grandpa"> GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;