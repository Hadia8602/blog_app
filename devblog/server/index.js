import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import Post from './models/Post.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check (no DB needed)
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

export default app;

// Local development
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}