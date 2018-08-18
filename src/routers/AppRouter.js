import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Expensifyhomepage from './../components/Expensifyhomepage.js';
import Addexpensecomponent from './../components/Addexpensecomponent.js';
import HelpExpensify from './../components/HelpExpensify.js';
import Editexpensecomponent from './../components/Editexpensecomponent.js';
import NotfoundPage from './../components/NotfoundPage.js';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';


export const history =createHistory();

const AppRouter=()=>(
    <Router history = {history}>
    <div>
    <Switch>
    
    <Route path = '/' component={LoginPage} exact = {true}/>
    <PrivateRoute path = '/dashboard' component = {Expensifyhomepage} />
    <PrivateRoute path = '/create' component = {Addexpensecomponent} />
    <PrivateRoute path = '/edit/:id' component = {Editexpensecomponent} />
    <Route path ='/help' component={HelpExpensify} />
    <Route component={NotfoundPage} />
    </Switch>
    </div>

    </Router>
);

export default AppRouter;