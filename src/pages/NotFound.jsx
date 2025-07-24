import "../assets/styles/notFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">Page Not Found</p>
      <p className="not-found-message">The page you are looking for doesn't exist or has been moved.</p>
    </div>
  );
};

export default NotFound;
