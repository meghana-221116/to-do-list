import { useEffect, useState } from "react";
import API from "./api/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  // Get all tasks
  const getTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (title === "" || description === "") {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/tasks", {
        title,
        description,
        completed: false,
      });

      setTitle("");
      setDescription("");
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Update status
  const updateStatus = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        ...task,
        completed: !task.completed,
      });

      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Search
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>My To-Do App</h1>

      <input
        type="text"
        placeholder="Enter Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      <input
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      <h2>Task List</h2>

      {filteredTasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Status:</strong>{" "}
              {task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>

            <button onClick={() => updateStatus(task)}>
              {task.completed ? "Mark Pending" : "Mark Completed"}
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;