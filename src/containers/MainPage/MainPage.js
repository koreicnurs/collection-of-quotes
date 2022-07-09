import React from 'react';
import Quotes from "../Quotes/Quotes";
import Navigation from "../Navigation/Navigation";
import NavBar from "../../components/NavBar/NavBar";
import './Main.css';

const MainPage = () => {
    return (
        <>
            <NavBar/>
            <div className='main'>
                <Navigation/>
                <Quotes/>
            </div>
        </>
    );
};

export default MainPage;