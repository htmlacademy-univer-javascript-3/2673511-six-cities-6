import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthorized, children }) => {
  return isAuthorized ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
