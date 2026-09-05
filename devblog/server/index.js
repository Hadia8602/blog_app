require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./models/Post");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

// MongoDB connection
let dbReady;
const connectDB = () => dbReady ??=
  mongoose.connect(process.env.MONGODB_URI);

app.use(async (_req, _res, next) => {
  try { await connectDB(); next(); }
  catch (error) { next(error); }
});

// Routes
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/health", (_, res) =>
  res.json({ ok: true, service: "api" }));

module.exports = app;

if (!process.env.VERCEL) app.listen(3000);