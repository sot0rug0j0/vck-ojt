import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Vivekanand College</h3>
          <p>
            Established in 1980, Vivekanand College is committed to academic excellence, innovation, and holistic development.
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
          <p>Phone: +91 12345 67890</p>
          <p>Email: info@vivekanandcollege.edu</p>
        </div>

        <div className="footer-section address">
          <h3>Our Campus Location</h3>
          <p>2130, E Ward, Tarabai Park,<br />Kolhapur, Maharashtra 416003</p>
          <p>
            Tarabai Park is a central and historic area in Kolhapur, known for its greenery and proximity to key landmarks including educational institutions, government offices, and transport hubs. The location offers easy access for students and visitors.
          </p>
          <p><b>Nearby Landmarks:</b> Mahalaxmi Temple, Rankala Lake, Kolhapur Railway Station</p>
          <p><b>Public Transport:</b> Well connected by city buses, rickshaws, and taxis.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
