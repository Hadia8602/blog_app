import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
        setError(null);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Post not found');
        } else {
          setError('Failed to load post. Please try again.');
        }
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/posts');
      } catch (err) {
        alert('Failed to delete post. Please try again.');
        console.error('Error deleting post:', err);
      }
    }
  };

  if (loading) {
    return <div className="loading"> Loading post</div>;
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <p>{error}</p>
          <button className="btn" onClick={() => navigate('/posts')}>
             Back to Posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="post-detail">
        <button className="btn btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '1.5rem' }}>
           Back
        </button>
        
        <h1>{post.title}</h1>
        
        <div className="post-meta">
          <span> <strong>{post.author}</strong></span>
          <span> <span className="tag">{post.tag}</span></span>
          <span> {new Date(post.date).toLocaleDateString()}</span>
        </div>
        
        <div className="post-body">
          <p>{post.body}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button className="btn btn-danger" onClick={handleDelete}>
             Delete Post
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/posts')}>
             All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;