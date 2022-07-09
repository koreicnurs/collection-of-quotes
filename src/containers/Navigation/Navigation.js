import React from 'react';
import {NavLink} from "react-router-dom";
import {categoryName} from "../../categoryName";
import './Navigation.css';

const Navigation = () => {

    return (
        <>
            <ul className='nav navigation justify-content-center'>
                <li className="nav-item">
                    <NavLink className='nav-link link' to='/'>All</NavLink>
                </li>
                {categoryName.map(c => {
                    return (
                        <li className="nav-item" key={c.id}>
                            <NavLink className='nav-link link' key={c.id} to={`/quotes/${c.id}"`}>{c.title}</NavLink>
                        </li>
                    )
                })}
            </ul>

        </>
    );
};

export default Navigation;