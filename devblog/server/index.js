const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Post = require('./models/Post');

const app = express();

// CORS configuration - Use ONE cors() call
app.use(cors({
  origin: '*',  // Allow all origins for now (simplest fix)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// OR if you want to be specific:
// app.use(cors({
//   origin: 'https://blog-app-fjm7.vercel.app', // Your ACTUAL frontend URL
//   credentials: true
// }));

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'api' });
});

// Get all posts
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

// Get a single post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    await connectDB();
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
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