import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import './styles/Pages.css'; // If you have separate CSS for pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ChatbotComponent />
      </Router>
    </>
  )
}

export default App;
// Note: Ensure that the paths in the imports match your project structure.