import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Quotes from "./containers/Quotes/Quotes";
import AddQuote from "./containers/AddQuote/AddQuote";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Quotes}/>
                    <Route path='/quotes' exact component={Quotes}/>
                    <Route path='/quotes/add' component={AddQuote}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;