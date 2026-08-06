import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3 style={{ color: '#d6336c', marginBottom: '0.5rem' }}>{post.title}</h3>
      </Link>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{ color: '#666' }}> {post.author}</span>
        <span className="tag">{post.tag}</span>
      </div>
      <p style={{ color: '#4a1942' }}>{post.summary}</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to={`/posts/${post._id}`} className="btn btn-secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
           Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;