import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="intro-text">
          We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
        </p>

        <div className="contact-section">
          <h2>General Enquiries</h2>
          <p><b>Vivekanand College Main Campus</b></p>
          <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
          <p>India</p>
          <p>📞 +91 12345 67890</p>
          <p>📧 info@vivekanandcollege.edu</p>
          <p>🕘 Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        </div>

        <div className="contact-section">
          <h2>Admissions Office</h2>
          <p>Phone: +91 98765 43210</p>
          <p>Email: admissions@vivekanandcollege.edu</p>
        </div>

        <div className="contact-section">
          <h2>Student Support Services</h2>
          <p>Phone: +91 87654 32109</p>
          <p>Email: studentsupport@vivekanandcollege.edu</p>
        </div>

        <div className="contact-section">
          <h2>Find Us on the Map</h2>
          <a
            className="map-link"
            href="https://www.google.com/maps/place/Vivekanand+College,+Chembur,+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 View on Google Maps
          </a>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <hr />
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" required placeholder="Subject of your message" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" required placeholder="Type your message here..."></textarea>
            </div>
            <button className="submit-btn" type="submit">📨 Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
