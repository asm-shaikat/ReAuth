import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Middleware = ({ children }) => {
  const { LoginUserinfo } = useContext(AuthContext);

  if (LoginUserinfo) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Middleware;
