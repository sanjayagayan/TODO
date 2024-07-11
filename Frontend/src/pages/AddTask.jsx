import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, status };

    axios
      .post("https://todo-backend-3th102sss-sanjayagayans-projects.vercel.app/api/v1/add/task", newTask, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("Task Added Successfully!");
        navigate("/");
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="mb-4">
          <div className="bg-blue-600 text-white py-4 text-center px-4 rounded-t-lg">
            <h1 className="text-4xl font-bold">Add a New Task</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-4 px-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 px-3 py-2.5 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
            />
          </div>
          <div className="mb-4 px-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Task Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-2 px-3 py-2.5 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none "
            ></textarea>
          </div>
          <div className="flex w-full mb-4 px-4 gap-x-2">
          <div className="w-[50%]">
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="mt-2 px-3 py-2.5 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none "
            />
          </div>
            <div className="w-[50%]">
                <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
                >
                Status
                </label>
                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="mt-2 px-3 py-2.5 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
                >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                </select>
            </div>
          </div>
          
          <div className="mt-6 mb-4 space-y-4 px-4">
            <button
              type="submit"
              className="w-full font-medium rounded-md bg-blue-500 hover:bg-blue-700 px-3 py-3 text-white"
            >
              Create Task
            </button>
            <button
              type="button"
              className="w-full font-medium rounded-md bg-red-500 hover:bg-red-700 px-3 py-3 text-white"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
