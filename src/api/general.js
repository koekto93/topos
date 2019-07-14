import axios from 'axios';
//axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const SEND_FORM_URL = 'http://localhost:3001/sendForm/';

export const sendForm = data =>
  axios
    .post(SEND_FORM_URL, data)
    .then(res => {
      return res;
    })
    .catch(({ res }) => {
      return false;
    });
