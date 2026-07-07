# To-Do List App

## Project Description

This project is a simple To-Do List application developed using React, Node.js, Express.js, and MongoDB. In this project, users can add new tasks, view all tasks, update task details, mark tasks as completed, search tasks, and delete tasks. The frontend and backend are connected using REST APIs.

## Technologies Used

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- Add a new task
- View all tasks
- Update task details
- Delete a task
- Mark task as completed
- Search tasks

## How to Run the Project

### Backend

1. Open the backend folder.
2. Install the required packages.

```bash
npm install
```

3. Start the server.

```bash
npm run dev
```

### Frontend

1. Open the frontend folder.
2. Install the required packages.

```bash
npm install
```

3. Run the React application.

```bash
npm run dev
```

4. Open the application in your browser.

```
http://localhost:5173
```

## Environment Variables

Create a `.env` file inside the backend folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

- GET /api/tasks → Get all tasks
- GET /api/tasks/:id → Get a single task
- POST /api/tasks → Add a new task
- PUT /api/tasks/:id → Update a task
- DELETE /api/tasks/:id → Delete a task

## Challenges Faced

While doing this assignment, I faced some problems with the MongoDB connection and connecting the frontend with the backend. At first, I got connection errors, but after checking the MongoDB connection string, updating the configuration, and testing the APIs using Thunder Client, I was able to solve the issues. This project helped me understand how frontend and backend communicate with each other.

## Conclusion

This assignment helped me learn how to build a full-stack To-Do List application using React, Node.js, Express.js, and MongoDB. I also learned how to create REST APIs, connect them with the frontend using Axios, and perform CRUD operations.