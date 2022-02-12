import axios from 'axios';

export const signup = async (data) => {
  try {
    if (data.password !== data.passwordConfirm) {
      return { message: 'Error', detail: 'Contraseñas no coinciden' };
    }
    const resp = await axios.post(`${process.env.REACT_APP_API}/user/signup`, data);
    return resp.data;
  } catch (e) {
    return e.response.data;
  }
}

export const login = async (data) => {
  /* data = {email, password} */
  try {
    const resp = await axios.post(`${process.env.REACT_APP_API}/user/login`, data);
    return resp.data
  } catch (e) {
    return e.response.data
  }
}

/* GET/DELETE ('RUTA', {
  headers:{
    Authorization: 'Bearer ' + 'afasfasdf.asdfasdf.asdf'
  }
}) */

/* 

POST/PUT ('RUTA', body, {
  headers:{
    Authorization: 'Bearer ' + 'afasfasdf.asdfasdf.asdf'
  }
}) */