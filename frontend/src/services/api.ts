import axios from 'axios';
import { auth } from '../config/firebase';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Booking API
export const bookingAPI = {
  // Create a new booking (public - no auth required)
  create: async (bookingData: any) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  // Get all bookings (admin only)
  getAll: async (params?: any) => {
    const response = await api.get('/bookings', { params });
    return response.data;
  },

  // Get single booking (admin only)
  getById: async (id: string) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },

  // Update booking (admin only)
  update: async (id: string, data: any) => {
    const response = await api.put(`/bookings/${id}`, data);
    return response.data;
  },

  // Delete booking (admin only)
  delete: async (id: string) => {
    const response = await api.delete(`/bookings/${id}`);
    return response.data;
  },

  // Get booking statistics (admin only)
  getStats: async () => {
    const response = await api.get('/bookings/stats/overview');
    return response.data;
  },
};

export default api;
