import axios from 'axios';

// TODO: Substituir por URL real quando o backend estiver pronto
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

// Interceptor para adicionar token se necessário
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const faturamentoAPI = {
  // TODO: Implementar quando o backend estiver pronto
  getAll: () => api.get('/faturamento'),
  getById: (id) => api.get(`/faturamento/${id}`),
  create: (data) => api.post('/faturamento', data),
  update: (id, data) => api.put(`/faturamento/${id}`, data),
  delete: (id) => api.delete(`/faturamento/${id}`)
};

export const categoriasAPI = {
  getAll: () => api.get('/categorias'),
  getById: (id) => api.get(`/categorias/${id}`)
};

export const ventasAPI = {
  getAll: () => api.get('/vendas'),
  getDistribuicao: () => api.get('/vendas/distribuicao')
};

export default api;
