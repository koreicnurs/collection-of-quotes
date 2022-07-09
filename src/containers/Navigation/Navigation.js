import React from 'react';
import NavLink from "react-router-dom/es/NavLink";
import {categoryName} from "../../categoryName";

const Navigation = () => {

    return (
        <>
            <nav>
                <NavLink to='/'>All</NavLink>
                {categoryName.map(c => {
                    return (
                        <NavLink key={c.id} to={`/quotes/${c.id}"`}>{c.title}</NavLink>
                    )
                })}
            </nav>

        </>
    );
};

export default Navigation;