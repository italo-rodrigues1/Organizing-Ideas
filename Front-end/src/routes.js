import React from 'react';
import Home from './pages/Home';
import Ideas from './pages/DescriptionIdeas';
import Login from './pages/Login';
import Registration from './pages/Cadastro';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {AuthContextProvider} from './context/userContext/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <PrivateRoute path="/ideias" component={Home} isPrivate  />
          {/* <PrivateRoute path="/ideias/:id" component={Home}  /> */}
          <PrivateRoute  path="/description" component={Ideas} isPrivate  />
          {/* <PrivateRoute  path="/description/:id" component={Ideas}  /> */}
          <Route path="*" element={<div>404 NotFound</div>} />
        </AuthContextProvider>
      </Switch>
  </BrowserRouter>
)

export default Routes;