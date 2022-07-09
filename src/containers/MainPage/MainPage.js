import React from 'react';
import Quotes from "../Quotes/Quotes";
import Navigation from "../Navigation/Navigation";

const MainPage = () => {
    return (
        <div className='main'>
            <Navigation/>
            <Quotes/>
        </div>
    );
};

export default MainPage;