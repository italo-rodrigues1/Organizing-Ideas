import {useContext} from 'react';
import {AuthContext } from '../context/userContext/AuthContext';
import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: isPrivate, ...rest}) => {
    const {authenticated} = useContext(AuthContext);

    if(isPrivate && !authenticated){
        return <Redirect to="/" />
    }
    
   return (
        <Route {...rest}/>
   );
}
