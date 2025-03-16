import React from 'react'
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
  if(isLoggedIn) {
    return children; //here children means we are logged in, so dashboard will be visible
  }
  else {
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
