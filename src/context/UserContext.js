import React, { useState } from 'react';

const UserContext = React.createContext();
const { Provider, Consumer } = UserContext;

const UserProvider = ({ children }) => {
  const initialValue = {
    firstname: '',
    lastname: '',
    mail: '',
    token: '',
  }
  const [user, setUser] = useState(initialValue);

  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setUser((prevUser) => ({ ...prevUser, token }))
  }

  const saveInfoUser = (data) => {
    console.log({ ...user });
    console.log({ ...user, ...data });
    setUser((prevUser) => ({ ...prevUser, ...data }))
  }


  const clearToken = () => {
    localStorage.clear();
    setUser(initialValue)
  }

  return (
    <Provider value={{ user, saveToken, clearToken, saveInfoUser }}>
      {children}
    </Provider>
  )
};

// Exportamos
export { UserProvider, Consumer as UserConsumer, UserContext }