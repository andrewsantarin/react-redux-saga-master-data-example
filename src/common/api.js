import axios from 'axios';

// Implemented here so that we don't have to repeat this code everywhere.
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const API = {
  get(path) {
    return axios.get(`${BASE_URL}${path}`);
  },

  post(path, params) {
    return axios.post(`${BASE_URL}${path}`, params);
  },
};

export default API;
