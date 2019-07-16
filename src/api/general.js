import axios from "axios";
//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = true;
//axios.defaults.baseURL = "http://localhost:3001";

const SEND_FORM_URL = "/sendForm";

export const sendForm = data =>
  axios
    .post(SEND_FORM_URL, data)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(({ res }) => {
      return false;
    });
