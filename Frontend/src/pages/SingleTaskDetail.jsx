import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SingleTaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState([]);
  useEffect(() => {
    const getSingleTask = async () => {
      const res = await axios.get(
        `https://todo-backend-rose.vercel.app/api/v1/get/task/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTask(res.data);
      console.log(res.data);
    };
    getSingleTask();
  }, [id]);

  const handleToggleComplete = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "completed" ? "pending" : "completed",
    };
    axios
      .put(
        `https://todo-backend-rose.vercel.app/api/v1/update/task/${task._id}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        alert("Task Completed!");
        navigate("/");
      })
      .catch((error) => console.error("There was an error!", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://todo-backend-rose.vercel.app/api/v1/delete/task/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("Task Deleted Successfully!");
        navigate("/");
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div className="my-20 flex items-center justify-center bg-white px-8 sm:px-20">
      <div className="w-full max-w-lg shadow-lg rounded-lg overflow-hidden ">
        <div className="bg-blue-600 text-white text-center py-4">
          <h1 className="text-4xl font-bold">{task.title}</h1>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {task.description}
          </p>
          <div className="flex justify-between items-center mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm ${
                task.status === "completed"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {task.status === "completed" ? "Completed" : "Pending"}
            </span>
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-blue-600"
              checked={task.status === "completed"}
              onChange={() => handleToggleComplete(task)}
            />
          </div>
          <div className="flex space-x-4">
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md"
              onClick={() => navigate(`/user/tasks/edit/${id}`)}
            >
              Edit
            </button>
            <button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
          <button
            className="w-full mt-6 bg-gray-500 hover:bg-black text-white font-semibold py-3 px-4 rounded-md"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleTaskDetail;
