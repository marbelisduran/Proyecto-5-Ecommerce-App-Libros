import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const Logout = () => {
  const { clearToken } = useContext(UserContext);
  useEffect(() => clearToken());
  return <Navigate to='/' />
};

export default Logout;
