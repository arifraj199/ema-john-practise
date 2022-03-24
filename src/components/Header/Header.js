import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div className='navbar-link'>
                    <a href="/order">Order</a>
                    <a href="/order_placement">Order Placement</a>
                    <a href="/refund">Refund</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;