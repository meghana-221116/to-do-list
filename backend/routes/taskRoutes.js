const express = require("express");
const router = express.Router();

const {
  addTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

// Add task
router.post("/tasks", addTask);

// Get all tasks
router.get("/tasks", getTasks);

// Get single task
router.get("/tasks/:id", getTaskById);

// Update task
router.put("/tasks/:id", updateTask);

// Delete task
router.delete("/tasks/:id", deleteTask);

module.exports = router;