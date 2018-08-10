import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Expensifyhomepage from './../components/Expensifyhomepage.js';
import Addexpensecomponent from './../components/Addexpensecomponent.js';
import HelpExpensify from './../components/HelpExpensify.js';
import Editexpensecomponent from './../components/Editexpensecomponent.js';
import NotfoundPage from './../components/NotfoundPage.js';
import Header from './../components/Header.js'
import LoginPage from './../components/LoginPage'




const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    
    <Route path = '/' component={LoginPage} exact = {true}/>
    <Route path = '/dashboard' component = {Expensifyhomepage} />
    <Route path = '/create' component = {Addexpensecomponent} />
    <Route path = '/edit/:id' component = {Editexpensecomponent} />
    <Route path ='/help' component={HelpExpensify} />
    <Route component={NotfoundPage} />
    </Switch>
    </div>

    </BrowserRouter>
);

export default AppRouter;