import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import './App.css';
import './styles/Pages.css'; // Your combined CSS or separate styles

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdmissionPage = lazy(() => import("./pages/AdmissionPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import Footer from "./components/Footer/Footer";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign: 'center', marginTop: '100px'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          {/* Catch all unknown routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ChatbotComponent />
    </Router>
  );
};

export default App;
