import React, { useEffect, useState, useContext } from 'react';

import { getInfo } from '../../services';
import { UserContext } from '../../context/UserContext'
const UserInfo = () => {
  const { user, saveInfoUser } = useContext(UserContext)
  const getInfoUser = async () => {
    const resp = await getInfo();
    saveInfoUser(resp.detail)
  }

  useEffect(() => {
    getInfoUser()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' height={80} />

      <p style={{ fontSize: '20px' }}>
        <span style={{ fontWeight: 'bold' }}>Nombre(s):</span> {user.firstname}
      </p>

      <p style={{ fontSize: '20px' }}>
        <span style={{ fontWeight: 'bold' }}>Apellido(s):</span> {user.lastname}
      </p>
      <p style={{ fontSize: '20px' }}>
        <span style={{ fontWeight: 'bold' }}>Correo:</span> {user.mail}
      </p>
    </div>
  )
}

export default UserInfo
