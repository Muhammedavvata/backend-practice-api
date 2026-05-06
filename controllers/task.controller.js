// In-memory storage for tasks
// In a real application, this would be a database
let tasks = [
  { id: 1, title: "Learn Express.js", completed: false },
  { id: 2, title: "Build a REST API", completed: false },
  { id: 3, title: "Practice HTTP methods", completed: true },
];

// Counter to generate unique IDs for new tasks
let nextId = 4;

// GET /api/tasks - Retrieve all tasks
exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// GET /api/tasks/:id - Retrieve a single task by ID
exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

// POST /api/tasks - Create a new task
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a non-empty string" });
  }

  const newTask = {
    id: nextId,
    title: title.trim(),
    completed: false,
  };

  tasks.push(newTask);
  nextId++;

  res.status(201).json(newTask);
};

// PATCH /api/tasks/:id - Update a task
exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (req.body.title !== undefined) {
    if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
      return res
        .status(400)
        .json({ error: "Title must be a non-empty string" });
    }
    task.title = req.body.title.trim();
  }

  if (req.body.completed !== undefined) {
    if (typeof req.body.completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }
    task.completed = req.body.completed;
  }

  res.status(200).json(task);
};

// DELETE /api/tasks/:id - Delete a task
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.status(200).json(deletedTask[0]);
};
