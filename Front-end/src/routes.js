import React from 'react';
import Home from './pages/Home';
import Ideas from './pages/DescriptionIdeas';
import Login from './pages/Login';
import Registration from './pages/Cadastro';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import {AuthContextProvider} from './context/userContext/AuthContext';


const Routes = () => (
  <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/ideias" component={Home} />
        <Route exact path="/description" component={Ideas} />
        <Route path="*" element={<div>404 NotFound</div>} />
      </Switch>
  
  </BrowserRouter>
)

export default Routes;