import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Public = ({component: Component, ... rest}) => {

    const userLogged = false;

    if(userLogged){
        return <Redirect to="/dashboard" />
    }
    return (     
        <Route {...rest} component={Component} />
     );
}
 
export default Public