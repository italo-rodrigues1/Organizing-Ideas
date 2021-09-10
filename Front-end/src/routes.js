import React from 'react';
import Home from './pages/Home';
import Ideas from './pages/DescriptionIdeas';
import Login from './pages/Login';
import Registration from './pages/Cadastro';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
// import {AuthContextProvider} from './context/userContext/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute path="/ideias" component={Home}  />
        {/* <PrivateRoute path="/ideias/:id" component={Home}  /> */}
        <PrivateRoute  path="/description" component={Ideas}  />
        {/* <PrivateRoute  path="/description/:id" component={Ideas}  /> */}
        <Route path="*" element={<div>404 NotFound</div>} />
      </Switch>
  </BrowserRouter>
)

export default Routes;