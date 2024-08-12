import { Link } from "react-router-dom"; // If using React Router, import Link for navigation

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorContent}>
        <h1 style={styles.title}>Oops! Page Not Found</h1>
        <p style={styles.message}>
          We are sorry, but the page you are looking for cannot be found.
        </p>
        <p style={styles.message}>
          Maybe try going back to the <Link to="/">homepage</Link> or use the
          navigation menu.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },
  errorContent: {
    textAlign: "center",
  },
  title: {
    fontSize: "5rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
};

export default ErrorPage;
