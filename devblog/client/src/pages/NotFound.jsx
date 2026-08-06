const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1 style={{ color: '#d6336c', fontSize: '4rem' }}> 404</h1>
      <h2 style={{ color: '#4a1942' }}>Page Not Found</h2>
      <p style={{ color: '#666' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn" style={{ marginTop: '2rem' }}>
         Go Home
      </a>
    </div>
  );
};

export default NotFound;