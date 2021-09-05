import React from 'react';
import Home from './pages/Home';
import Ideas from './pages/DescriptionIdeas';
import Login from './pages/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/ideias" component={Home} />
     <Route exact path="/description" component={Ideas} />
    </Switch>
  </BrowserRouter>
)

export default Routes;