import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Logout from '../components/Logout';
import Product from '../components/Product';
import List from '../List';
import Signup from '../Signup';
import Cart from '../components/Cart/Cart';
import UserInfo from '../components/UserInfo/UserInfo';
import PrivateRoute from './PrivateRoute'

const RouterComponent = ({
  onupdatequantity,
  copyBooks,
}) => (
  <Routes>
    <Route path='/' element={<Navigate to="/book" />} />
    <Route path='/login' element={<Signup type={false} />} />
    <Route path='/signup' element={<Signup type={true} />} />
    <Route path='/checkout' element={<PrivateRoute><Cart /></PrivateRoute>} />
    <Route path='/profile' element={<PrivateRoute><UserInfo /></PrivateRoute>} />
    <Route path='/book/:id' element={<Product books={copyBooks} />} />
    <Route path='/book/' element={<List className="list" books={copyBooks} onupdatequantity={onupdatequantity} />} />
    <Route path='/logout' element={<PrivateRoute><Logout /></PrivateRoute>} />
  </Routes>
)

export default RouterComponent;
