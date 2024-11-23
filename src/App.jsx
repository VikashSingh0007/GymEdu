import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes under MainLayout will include the NavBar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
