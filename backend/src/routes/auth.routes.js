// src/routes/auth.routes.js

// stub signup/login endpoints (controllers can replace these later)
// router.post('/signup', (req, res) => res.json({ ok: true, message: 'signup stub' }));

import { Router } from "express";
import User from "../models/User.js";

const router = Router();


router.post("/signup", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required" });
    }

    const user = await User.create({ name, email });

    res.json({
      ok: true,
      message: "User successfully stored in DB",
      user
    });

  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;

// router.post('/login', (req, res) => res.json({ ok: true, message: 'login stub' }));

// export default router;
