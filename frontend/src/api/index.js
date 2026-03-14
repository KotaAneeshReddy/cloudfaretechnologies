import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const getJobs = () => api.get('/jobs');
export const getInternships = () => api.get('/internships');
export const getTestimonials = () => api.get('/testimonials');

export default api;
