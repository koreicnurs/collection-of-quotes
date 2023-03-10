import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";
import MainPage from "./containers/MainPage/MainPage";
import Category from "./containers/Category/Category";
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/quotes' exact component={MainPage}/>
                    <Route path='/quotes/add' component={AddQuote}/>
                    <Route path='/quotes/:id/edit' component={EditQuote}/>
                    <Route path='/quotes/:category' component={Category}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;