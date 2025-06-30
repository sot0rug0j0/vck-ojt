import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
        <Header />
      <h1 style={styles.emoji}>🚫 404</h1>
      <h2 style={styles.heading}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p style={styles.subtext}>Let’s get you back on track:</p>
      <Link to="/" style={styles.button}>
        Go to Home Page
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  emoji: {
    fontSize: "5rem",
  },
  heading: {
    fontSize: "2rem",
    color: "#ff6b6b",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#ddd",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "1rem",
    color: "#aaa",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#2b6cb0",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default NotFoundPage;
