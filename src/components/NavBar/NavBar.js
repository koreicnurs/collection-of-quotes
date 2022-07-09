import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <ul className='nav main-nav'>
            <h1 className='logo'>Quotes</h1>
            <div className='links-right'>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Quotes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/quotes/add">Submit new quote</NavLink>
                </li>
            </div>
        </ul>
    );
};

export default NavBar;