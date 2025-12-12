# Task / Todo Manager

A full-stack Task/Todo Manager application built with React (frontend) and Node.js/Express (backend).

## Tech Stack

- **Frontend**: React 18 with basic hooks (useState, useEffect)
- **Backend**: Node.js with Express
- **Database**: In-memory storage
- **Styling**: HTML/CSS

## Features

- ✅ Create new tasks with title and optional description
- ✅ View list of all tasks (pending and completed)
- ✅ Mark tasks as completed
- ✅ Beautiful and modern UI with responsive design
- ✅ Real-time state synchronization between frontend and backend

## Project Structure

```
task-todo-manager/
├── server/
│   └── index.js          # Express backend server
├── client/
│   ├── public/
│   │   └── index.html    # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTaskForm.js    # Form to add new tasks
│   │   │   ├── TaskList.js       # List of all tasks
│   │   │   └── TaskItem.js       # Individual task component
│   │   ├── App.js                # Main app component
│   │   ├── App.css
│   │   ├── index.js              # React entry point
│   │   └── index.css
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-todo-manager
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Running the Application

1. **Start the backend server** (Terminal 1)
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the React frontend** (Terminal 2)
   ```bash
   cd client
   npm start
   ```
   The frontend will open automatically at `http://localhost:3000`

## API Endpoints

### POST /tasks
Create a new task.

**Request Body:**
```json
{
  "title": "Task title",
  "description": "Optional description"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Task title",
  "description": "Optional description",
  "completed": false,
  "createdAt": "2025-12-11T23:08:00.000Z"
}
```

### GET /tasks
Get all tasks.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Task title",
    "description": "Optional description",
    "completed": false,
    "createdAt": "2025-12-11T23:08:00.000Z"
  }
]
```

### POST /tasks/:taskId/complete
Mark a task as completed.

**Response:**
```json
{
  "id": 1,
  "title": "Task title",
  "description": "Optional description",
  "completed": true,
  "createdAt": "2025-12-11T23:08:00.000Z"
}
```

## Approach

### Backend Implementation
- Used Express.js to create RESTful API endpoints
- Implemented in-memory storage using a JavaScript array
- Added CORS middleware to allow frontend-backend communication
- Implemented proper error handling and validation

### Frontend Implementation
- Used React functional components with hooks:
  - `useState` for managing component state
  - `useEffect` for fetching tasks on component mount
- Implemented state synchronization by refetching tasks after mutations
- Created reusable components for better code organization
- Added loading and error states for better UX

### State Management
- Frontend state is synchronized with backend by fetching tasks after each mutation
- Tasks are separated into pending and completed sections
- Real-time updates ensure consistency between frontend and backend

## Concepts Demonstrated

- **CRUD Operations**: Create (POST /tasks), Read (GET /tasks), Update (POST /tasks/:taskId/complete)
- **State Sync**: Frontend state is synchronized with backend through API calls
- **React Hooks**: useState and useEffect for state management and side effects
- **RESTful API**: Clean API design following REST principles

## Screenshots

(Add UI screenshots here after running the application)

## Future Enhancements

- Add delete task functionality
- Add edit task functionality
- Add task filtering and sorting
- Persist data using SQLite or a proper database
- Add user authentication
- Add task due dates and priorities

