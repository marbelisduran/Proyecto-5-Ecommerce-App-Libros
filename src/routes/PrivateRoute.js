import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from '../context/UserContext';

function PrivateRoute({ children }) {
  const { user: { token } } = useContext(UserContext);

  return token ? children : <Navigate to="/" />;
}

export default PrivateRoute;