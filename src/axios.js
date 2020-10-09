import axios from "axios";
const instance = axios.create({
  baseURL: "https://abdu-tinderback.herokuapp.com",
});

export default instance;
