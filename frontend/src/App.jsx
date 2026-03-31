import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trainings from './pages/Trainings';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import Enterprise from './pages/Enterprise';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';
import JobDetails from './pages/JobDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

// Admin Imports
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/trainings" element={<PageTransition><Trainings /></PageTransition>} />
        <Route path="/course/:id" element={<PageTransition><CourseDetails /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/careers/:id" element={<PageTransition><JobDetails /></PageTransition>} />
        <Route path="/internships" element={<PageTransition><Internships /></PageTransition>} />
        <Route path="/internships/:id" element={<PageTransition><JobDetails /></PageTransition>} />
        <Route path="/enterprise" element={<PageTransition><Enterprise /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-and-conditions" element={<PageTransition><TermsAndConditions /></PageTransition>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <PageTransition>
                <AdminDashboard />
              </PageTransition>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Navbar />}
      <main>
        <AnimatedRoutes />
      </main>
      {!isAdminPath && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-light text-primary-navy">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
