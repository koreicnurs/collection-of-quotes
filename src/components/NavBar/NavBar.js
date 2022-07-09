import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <ul className='nav justify-content-center'>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Quotes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/quotes/add">Submit new quote</NavLink>
            </li>
        </ul>


);
};

export default NavBar;