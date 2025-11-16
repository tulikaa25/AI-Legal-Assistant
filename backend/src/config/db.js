// backend/src/config/db.js
import mongoose from "mongoose";
import logger from "./logger.js";  

// This function connects to MongoDB using the URI from .env
async function connectDB(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info("Connected to MongoDB");
    return mongoose.connection;

  } catch (error) {
    logger.error("MongoDB connection error:", error.message);
    process.exit(1); // stop server if DB fails
  }
}

// Optional close function for graceful shutdown
async function closeDB() {
  await mongoose.connection.close();
  logger.info("MongoDB connection closed");
}

export default connectDB;
export { closeDB };
