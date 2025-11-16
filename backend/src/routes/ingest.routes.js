// src/routes/ingest.routes.js
import { Router } from 'express';
const router = Router();

// start ingest job stub
router.post('/start', (req, res) => {
  res.json({ ok: true, message: 'ingest job enqueued (stub)' });
});

export default router;
