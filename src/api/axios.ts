import axios from "axios";

const api = axios.create({
    baseURL: 'https://66171720ed6b8fa43481fa60.mockapi.io/portfolio',
    timeout: 1000,
  });

export default api