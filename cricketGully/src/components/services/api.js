import axios from 'axios';

const API = axios.create({ 
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const getCurrentUser = () => API.get('/auth/me');