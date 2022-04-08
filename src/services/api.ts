import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.0.51:3333',
});

export { api };
