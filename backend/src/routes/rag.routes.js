// src/routes/rag.routes.js
import { Router } from 'express';
const router = Router();

// simple demo RAG endpoint
router.post('/query', (req, res) => {
  const { question } = req.body || {};
  res.json({
    answer: `(demo) Received question: ${question || '<empty>'}`,
    sources: [],
    meta: { demo: true }
  });
});

export default router;
