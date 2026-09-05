const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Post = require('./models/Post');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check - NO database needed
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'api' });
});

// Get posts
app.get('/api/posts', async (req, res) => {
  try {
    await connectDB();
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: error.message });
  }
});

// Export for Vercel
module.exports = app;

// Local development
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}