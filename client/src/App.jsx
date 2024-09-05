import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import GeneralLayout from './layouts/GeneralLayout';
import Dashboard from './pages/admin/Dashboard';
import Games from './pages/admin/Games';
import Videos from './pages/admin/Videos';
import LandingPage from './pages/general/LandingPage';
import AboutUs from './pages/general/AboutUs';
import Login from './pages/general/Login';
import Register from './pages/general/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<GeneralLayout><LandingPage /></GeneralLayout>} />
        <Route path="/about" element={<GeneralLayout><AboutUs /></GeneralLayout>} />
        <Route path="/login" element={<GeneralLayout><Login /></GeneralLayout>} />
        <Route path="/register" element={<GeneralLayout><Register /></GeneralLayout>} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/games" element={<AdminLayout><Games /></AdminLayout>} />
        <Route path="/admin/videos" element={<AdminLayout><Videos /></AdminLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
