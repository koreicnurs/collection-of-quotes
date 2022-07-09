import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";
import MainPage from "./containers/MainPage/MainPage";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/quotes' exact component={MainPage}/>
                    <Route path='/quotes/add' component={AddQuote}/>
                    <Route path='/quotes/:id' component={EditQuote}/>
                    <Route path='/quotes/:category' component={MainPage}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;