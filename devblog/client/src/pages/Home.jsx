const Home = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1 style={{ color: '#d6336c', fontSize: '3rem' }}>
           Welcome to DevBlog
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#4a1942', marginTop: '1rem' }}>
          A beautiful blog built with MongoDB, Express, React, and Node.js
        </p>
        <p style={{ color: '#666', marginTop: '1rem' }}>
           Check out the posts page to see all blog entries!
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/posts" className="btn">
         View All Posts
          </a>
          <a href="/new" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
             Create New Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;