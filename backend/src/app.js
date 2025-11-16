import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import env from "./config/env.js";
import errorHandler from "./middleware/errorHandler.js";

// Route imports
import authRoutes from "./routes/auth.routes.js";
import ragRoutes from "./routes/rag.routes.js";
import ingestRoutes from "./routes/ingest.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import healthRoutes from "./routes/health.routes.js";

const app = express();

// Middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.ALLOWED_ORIGINS || "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (env.NODE_ENV !== "test") {
  app.use(morgan("combined"));
}

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rag", ragRoutes);
app.use("/api/ingest", ingestRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/health", healthRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.use(errorHandler);

export default app;
