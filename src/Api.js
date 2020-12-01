import axios from 'axios';

// TODO (jbalmant) - Add auth
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  responseType: "json",
  headers: {
      'Access-Control-Allow-Origin': '*'
  }
});

export default axiosInstance;