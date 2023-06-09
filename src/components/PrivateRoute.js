import React from 'react'
// import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({isLoggedIn,children}) => {
  if(isLoggedIn){
    return children;
  }else{
    return (
            <Navigate to='/login' />
    )
  }
}
