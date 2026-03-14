import axios from 'axios';

const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080/api'
  : 'http://138.252.200.212:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const getJobs = () => api.get('/jobs');
export const getJobById = (id) => api.get(`/jobs/${id}`);
export const getInternships = () => api.get('/internships');
export const getInternshipById = (id) => api.get(`/internships/${id}`);
export const submitApplication = (applicationData) => api.post('/applications', applicationData);
export const sendContactMessage = (data) => axios.post(`${API_URL}/contact`, data);
export const enrollInProgram = (data) => axios.post(`${API_URL}/enrollments`, data);
export const getTestimonials = () => api.get('/testimonials');

export default api;
