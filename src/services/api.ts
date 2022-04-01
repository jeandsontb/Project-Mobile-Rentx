import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.3.195:3333',
});

export { api };
