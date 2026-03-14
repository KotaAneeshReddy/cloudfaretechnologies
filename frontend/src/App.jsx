import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trainings from './pages/Trainings';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import Enterprise from './pages/Enterprise';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-light text-primary-navy">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
