import Header from "../components/Header/Header";

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1 style={{textAlign: "center"}}>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            
            <h2>General Enquiries</h2>
            <p><b>Vivekanand College Main Campus</b></p>
            <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
            <p>India</p>
            <br />
            <p>Phone: <b>+91 12345 67890</b></p>
            <p>Email: <b>info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

            <h2>Admissions Office</h2>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>

            <h2>Student Support Services</h2>
            <p>For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>

            <h2>Find Us on the Map</h2>
            <br />
            <a href="https://www.google.com/maps/place/Vivekanand+College,+Chembur,+Mumbai" target="_blank" rel="noopener noreferrer">
                View on Google Maps
            </a>

            <h2>Send Us a Message</h2>
            <hr />
            <form style={{ maxWidth: "500px", margin: "0 auto" }}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required style={{ width: "100%" }} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required style={{ width: "100%" }} />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" name="subject" required style={{ width: "100%" }} />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" rows="5" required style={{ width: "100%" }} />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
