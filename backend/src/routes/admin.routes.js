// src/routes/admin.routes.js
import { Router } from 'express';
const router = Router();

// Example protected admin route (you'll add auth later)
router.get('/', (req, res) => {
  res.json({ ok: true, role: 'admin', message: 'Admin root (stub)' });
});

export default router;
