import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rentx.pubjaiz.com.br/server.json:3333',
});

export { api };