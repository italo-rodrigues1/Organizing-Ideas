
import { isAuthenticated } from '../auth/auth';

import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
   return (
        <Route {...rest} render = {props =>(
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to = {{pathname : '/',state:{from : props.location}}} />
            )
        )}/>
   );
}
