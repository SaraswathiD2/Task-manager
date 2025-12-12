const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database
let tasks = [];
let taskIdCounter = 1;

// Helper function to find task by ID
const findTaskById = (id) => {
  return tasks.find(task => task.id === parseInt(id));
};

// POST /tasks - create task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: taskIdCounter++,
    title: title.trim(),
    description: description ? description.trim() : '',
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /tasks - list tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks/:taskId/complete - mark complete
app.post('/tasks/:taskId/complete', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const task = findTaskById(taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.completed = true;
  res.json(task);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

