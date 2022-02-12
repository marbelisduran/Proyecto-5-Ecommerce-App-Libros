import React, { useContext } from 'react';
import Menu from '../Menu';
import { UserContext } from '../context/UserContext'
const Layout = ({
  children,
  title,
  onsearch
}) => {
  const { user: token } = useContext(UserContext)
  return (
    <div>
      <Menu title={title} onsearch={onsearch} token={token} />
      {children}
    </div>
  )
};

export default Layout;
