import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const API_BASE_URL = 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const handleAddTask = async (title, description) => {
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      // Refresh tasks list
      await fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  // Mark task as completed
  const handleCompleteTask = async (taskId) => {
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to complete task');
      }

      // Refresh tasks list
      await fetchTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Task Manager</h1>
          <p>Organize your tasks efficiently</p>
        </header>

        {error && (
          <div className="error-message">
            Error: {error}
          </div>
        )}

        <AddTaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          loading={loading}
          onCompleteTask={handleCompleteTask}
        />
      </div>
    </div>
  );
}

export default App;

