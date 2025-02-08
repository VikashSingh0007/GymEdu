import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Course from './pages/Course';
import Coaching from './pages/Coaching';
import Pricing from './pages/Pricing';
import Transformation from './pages/Transformation';
import Blog from './pages/Blog';
import Enroll from './pages/EnrollNow';
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route element={<MainLayout />}>
          {/* Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/transformations" element={<Transformation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enroll" element={<Enroll />} />
        </Route>
      </Routes> 
    </Router>
  );
};

export default App;
