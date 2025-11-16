backend/
├── package.json                # Defines backend dependencies, scripts, and metadata.
├── .env                        # Stores environment variables like DB URI and JWT secret.
├── README.md                   # Explains how to run and understand the backend.

├── src/
│   ├── server.js               # Entry point that starts the Express server.
│   ├── app.js                  # Configures Express middlewares and loads routes.

│   ├── config/
│   │   ├── db.js               # Handles MongoDB connection setup.
│   │   ├── logger.js           # Centralized logging configuration.
│   │   └── env.js              # Loads and validates environment configuration.

│   ├── models/
│   │   ├── User.js             # MongoDB schema for user accounts.
│   │   ├── AuditLog.js         # Schema for storing DPDP-compliant audit trails.
│   │   ├── CaseQuery.js        # Stores each user’s legal query history.
│   │   └── IngestedDocument.js # Stores documents ingested into the RAG system.

│   ├── routes/
│   │   ├── auth.routes.js      # Defines all auth-related API endpoints.
│   │   ├── rag.routes.js       # Endpoints for RAG query and response generation.
│   │   ├── ingest.routes.js    # Endpoints to start or manage document ingestion jobs.
│   │   ├── admin.routes.js     # Admin operations like human review or monitoring.
│   │   └── health.routes.js    # Health-check endpoint for uptime monitoring.

│   ├── controllers/
│   │   ├── auth.controller.js  # Logic for signup, login, and JWT token handling.
│   │   ├── rag.controller.js   # Handles processing of user queries using RAG.
│   │   ├── ingest.controller.js# Controls ingestion workflows and queue triggering.
│   │   └── admin.controller.js # Admin-level actions such as oversight and metrics.

│   ├── middleware/
│   │   ├── auth.js             # Middleware to protect routes using JWT authentication.
│   │   ├── errorHandler.js     # Centralized error handler for all API failures.
│   │   └── validateRequest.js  # Validates input body/params for routes.

│   ├── services/
│   │   ├── embeddings/
│   │   │   ├── embeddingClient.js    # Calls embedding model to convert text into vectors.
│   │   │   └── embedderSelector.js   # Chooses which embedding model/provider to use.
│   │   ├── vector/
│   │   │   ├── vectorClient.js       # Connects to Pinecone/Milvus/Weaviate vector DB.
│   │   │   └── vectorStore.js        # Handles vector insert, search, and metadata ops.
│   │   ├── llm/
│   │   │   ├── llmClient.js          # Sends prompts to the selected LLM and gets responses.
│   │   │   └── prompts.js            # Stores system prompts and templates for RAG.
│   │   ├── ingest/
│   │   │   ├── dilrmpAdapter.js      # Fetches and formats DILRMP land records.
│   │   │   ├── njdgAdapter.js        # Connects to NJDG court case data.
│   │   │   ├── ecourtsAdapter.js     # Connects to eCourts API for case info.
│   │   │   ├── chunker.js            # Splits documents into chunks for RAG ingestion.
│   │   │   ├── cleaner.js            # Cleans and normalizes text before embedding.
│   │   │   └── ingestQueue.js        # Queue system for processing ingestion jobs.
│   │   └── audit.service.js          # Creates audit logs for queries and system events.

│   ├── utils/
│   │   ├── sanitization.js     # Cleans user input to prevent injection and noise.
│   │   ├── crypto.js           # Provides hashing/encryption helpers.
│   │   └── constants.js        # Stores reusable constants for consistency.

│   ├── jobs/
│   │   ├── ingestWorker.js     # Background worker that processes ingestion tasks.
│   │   └── embeddingWorker.js  # Worker that generates embeddings for ingested documents.

└── tests/
    ├── auth.test.js            # Tests for authentication API endpoints.
    ├── rag.test.js             # Tests for RAG query pipeline.
    └── ingest.test.js          # Tests ingestion workflows and queue handling.
