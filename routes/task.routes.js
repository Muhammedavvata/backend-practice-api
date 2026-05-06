const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

// GET /api/tasks - Retrieve all tasks
router.get("/tasks", taskController.getAllTasks);

// GET /api/tasks/:id - Retrieve a single task by ID
router.get("/tasks/:id", taskController.getTaskById);

// POST /api/tasks - Create a new task
router.post("/tasks", taskController.createTask);

// PATCH /api/tasks/:id - Update a task
router.patch("/tasks/:id", taskController.updateTask);

// DELETE /api/tasks/:id - Delete a task
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
