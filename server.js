const express = require("express");
const taskRoutes = require("./routes/task.routes");
const requestRoutes = require("./routes/request.routes");
const statusRoutes = require("./routes/status.routes");
const errorRoutes = require("./routes/error.routes");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Custom request logger middleware
app.use(requestLogger);

// Register task routes under /api
app.use("/api", taskRoutes);

// Register request demo routes under /api/request-demo
app.use("/api/request-demo", requestRoutes);

// Register status demo routes under /api/status-demo
app.use("/api/status-demo", statusRoutes);

// Register error demo routes under /api/error-demo
app.use("/api/error-demo", errorRoutes);

// Register error handler middleware after all routes
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  //console.log("Use Postman to test the API endpoints at /api/tasks");
});
