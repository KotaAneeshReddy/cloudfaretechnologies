import axios from 'axios';

const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:8080/api'
  : 'https://cloudfaretechnologies.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to include JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth
export const login = (credentials) => api.post('/auth/login', credentials);
export const setupAdmin = () => api.post('/auth/setup');

// Courses
export const getCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const createCourse = (data) => api.post('/courses', data);
export const updateCourse = (id, data) => api.put(`/courses/${id}`, data);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);

// Jobs
export const getJobs = () => api.get('/jobs');
export const getJobById = (id) => api.get(`/jobs/${id}`);
export const createJob = (data) => api.post('/jobs', data);
export const updateJob = (id, data) => api.put(`/jobs/${id}`, data);
export const deleteJob = (id) => api.delete(`/jobs/${id}`);

// Internships
export const getInternships = () => api.get('/internships');
export const getInternshipById = (id) => api.get(`/internships/${id}`);
export const createInternship = (data) => api.post('/internships', data);
export const updateInternship = (id, data) => api.put(`/internships/${id}`, data);
export const deleteInternship = (id) => api.delete(`/internships/${id}`);

// Submissions
export const getApplications = () => api.get('/applications');
export const deleteApplication = (id) => api.delete(`/applications/${id}`);
export const getEnrollments = () => api.get('/enrollments');
export const deleteEnrollment = (id) => api.delete(`/enrollments/${id}`);

// Settings
export const getSettings = () => api.get('/settings');
export const createSetting = (data) => api.post('/settings', data);
export const updateSetting = (id, data) => api.put(`/settings/${id}`, data);
export const deleteSetting = (id) => api.delete(`/settings/${id}`);

export const submitApplication = (applicationData) => api.post('/applications', applicationData);
export const sendContactMessage = (data) => api.post('/contact', data);
export const enrollInProgram = (data) => api.post('/enrollments', data);
export const getTestimonials = () => api.get('/testimonials');

export default api;
