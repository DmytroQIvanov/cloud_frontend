import axios from "axios";

const AxiosDefault = () => {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
  axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return;
};

export default AxiosDefault;
