import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const PrivateRoute = ({Component:Component}) => { 
    const token = window.localStorage.getItem('token');
    return token ? <Component /> : <Navigate to="/signin" />;
}

export default PrivateRoute

 