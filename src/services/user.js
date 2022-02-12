import axios from 'axios';

export const getInfo = async () => {
  try {
    const resp = await axios.get(`${process.env.REACT_APP_API}/user/info`,{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
    return resp.data;
  } catch (e) {
    return e.response.data;
  }
}