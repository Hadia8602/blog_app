// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blog-app-8tgz-3eo8gi041-hadi-008c.vercel.app/api'
});

export default api;