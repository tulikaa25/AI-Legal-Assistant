// backend/src/server.js
import http from "http";
import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/db.js";
import logger from "./config/logger.js";

const PORT = env.PORT || 4000;

async function startServer() {
  try {
    // Connect DB
    await connectDB(env.MONGO_URI);
    // logger.info("Connected to MongoDB");

    // Create server
    const server = http.createServer(app);

    server.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });

  } catch (err) {
    logger.error("Server startup error:", err);
    process.exit(1);
  }
}


startServer();
