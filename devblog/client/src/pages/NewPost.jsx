import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const NewPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    tag: 'General',
    summary: '',
    body: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post('/posts', formData);
      navigate('/posts');
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ color: '#d6336c', marginBottom: '2rem' }}> Create New Post</h1>
        
        {error && (
          <div className="error" style={{ marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
          <div className="form-group">
            <label> Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter post title"
            />
          </div>

          <div className="form-group">
            <label> Author *</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label> Tag</label>
            <select
              name="tag"
              value={formData.tag}
              onChange={handleChange}
            >
              <option value="General">General</option>
              <option value="React">React</option>
              <option value="Hooks">Hooks</option>
              <option value="API">API</option>
              <option value="Router">Router</option>
              <option value="Git">Git</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Test">Test</option>
            </select>
          </div>

          <div className="form-group">
            <label> Summary</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Brief summary of your post"
            />
          </div>

          <div className="form-group">
            <label> Body *</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              placeholder="Write your post content here..."
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Creating...' : ' Publish Post'}
            </button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/posts')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;