import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <section className="about-hero">
        <h1>About Vivekanand College</h1>
        <p>
          <strong>Vivekanand College</strong> is a premier institution dedicated
          to academic excellence, innovation, and holistic development.
          Established in 1980, we have empowered generations of students to
          achieve their full potential.
        </p>
      </section>

      {/* <hr /> */}

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To provide quality education that fosters critical thinking,
          creativity, and leadership, preparing students to excel in a rapidly
          changing world.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a center of excellence in higher education, nurturing
          responsible citizens and future leaders.
        </p>
      </section>

      {/* <hr /> */}

      <section className="about-section">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> Upholding the highest standards of honesty and ethics.</li>
          <li><strong>Innovation:</strong> Encouraging creativity and embracing new ideas.</li>
          <li><strong>Inclusivity:</strong> Fostering a diverse and welcoming community.</li>
          <li><strong>Excellence:</strong> Striving for the best in teaching, learning, and research.</li>
          <li><strong>Service:</strong> Contributing positively to society and the nation.</li>
        </ul>
      </section>

      {/* <hr /> */}

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced and dedicated faculty</li>
          <li>Modern infrastructure and facilities</li>
          <li>Vibrant campus life</li>
          <li>Strong industry connections and placement support</li>
        </ul>
      </section>

      <section className="about-conclusion">
        <p>
          Join us at <strong>Vivekanand College</strong> and embark on a journey
          of knowledge, growth, and success!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
