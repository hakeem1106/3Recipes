import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import NewRecipe from './pages/NewRecipe';
import RecipesPage from './pages/RecipesPage';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={withRouter(HomePage)} />
            <Route exact path="/addRecipe" component={withRouter(NewRecipe)} /> 
            <Route exact path="/recipes" component={withRouter(RecipesPage)} /> 
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))