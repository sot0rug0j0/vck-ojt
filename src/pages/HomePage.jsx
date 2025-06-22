import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Popup from "../components/Popup"; // Uses updated Popup.jsx below

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>
      <Header />

      {showPopup && (
        <Popup
          title="Welcome! to my First React App"
          onClose={() => setShowPopup(false)}
          autoClose={false}
        >
          <div className="popup-profile">
            <img
              src="/coder_pfp.jpg" // 👈 Put your image in public folder
              alt="Profile"
              className="popup-avatar"
            />
            <p>
              <b>Atharv Jadhav</b>
              <br />
              MERN Stack Developer • Web Enthusiast
            </p>
            {/* ✅ "Got It" Button */}
            <button className="got-it-btn" onClick={() => setShowPopup(false)}>
              Got It
            </button>
          </div>
        </Popup>
      )}

      <div className="home-container">
        <img
          className="centered-image"
          src="/college-banner.png"
          alt="college_banner"
        />
      </div>

      <h1>Welcome to Vivekanand College!</h1>
      <p>Your journey to excellence starts here.</p>

      <p>
        <b>Vivekanand College</b> is a premier educational institution...
      </p>

      <h1>Why Choose Vivekanand College?</h1>
      <hr />
      <ul>
        <li>
          <b>Legacy of Excellence:</b> Decades of commitment to quality
          education.
        </li>
        <li>
          <b>Experienced Faculty:</b> Learn from renowned experts and passionate
          educators.
        </li>
        <li>
          <b>Modern Facilities:</b> Well-equipped labs, expansive library, and
          comfortable campus.
        </li>
        <li>
          <b>Holistic Development:</b> Co-curricular activities, sports, and
          community service.
        </li>
        <li>
          <b>Strong Placements:</b> Career opportunities with leading companies.
        </li>
      </ul>

      <h1>Campus Life & Facilities</h1>
      <hr />
      <img
        src="/students-studying.jpeg"
        width="600px"
        alt="Students Studying"
      />
      <img
        src="/campus-life.jpg"
        width="600px"
        height="300px"
        alt="Campus Life"
      />

      <p>
        Explore our vibrant campus and state-of-the-art facilities designed to
        enhance your learning experience.
      </p>

      <Link to="/admission">
        <button style={{ display: "block", margin: "20px auto" }}>
          Explore Courses
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
