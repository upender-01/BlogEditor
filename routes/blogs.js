import express from 'express';
import Blog from '../models/blog.js';

const router = express.Router();

// To  save or draft 
router.post('/save-draft', async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'draft' }, { new: true });
    } else {
      blog = new Blog({ title, content, tags, status: 'draft' });
      await blog.save();
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Here to publish the article
router.post('/publish', async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(id, { title, content, tags, status: 'published' }, { new: true });
    } else {
      blog = new Blog({ title, content, tags, status: 'published' });
      await blog.save();
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
