import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get(`https://todo-backend-rose.vercel.app/api/v1/get/task/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setTask(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeStatus = (e) => {
    const updatedStatus = e.target.value;
    axios
      .put(
        `https://todo-backend-rose.vercel.app/api/v1/update/task/${task._id}`,
        { status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        setTask((prevState) => ({
          ...prevState,
          status: updatedStatus,
        }));
      })
      .catch((error) => console.error("There was an error!", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://todo-backend-rose.vercel.app/api/v1/update/task/${id}`, task, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        alert("Task Updated Successfully!");
        navigate("/");
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div className="flex items-center justify-center bg-white my-20 px-10 sm:px-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="mb-8">
          <div className="bg-blue-600 text-white py-4 text-center px-4 rounded-t-lg">
            <h1 className="text-4xl font-bold">Edit the Task</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-4 px-4">
            <label
              htmlFor="title"
              className="block text-[16px] font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
              className="mt-2 px-3 py-2.5 w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none "
            />
          </div>
          <div className="mb-4 px-4">
            <label
              htmlFor="description"
              className="block text-[16px] font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              required
              className="mt-2 px-3 py-2.5 w-full border text-black border-gray-300 rounded-md shadow-sm focus:outline-none"
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
                name="dueDate"
                value={task.dueDate.split("T")[0]}
                onChange={handleChange}
                required
                className="mt-2 px-3 py-2.5 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
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
                name="status"
                value={task.status}
                onChange={handleChangeStatus}
                required
                className="mt-2 px-3 py-2.5 mr-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none"
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="mt-6 mb-4 space-y-4 px-4">
            <button
              type="submit"
              className="w-full font-medium rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-3 text-white"
            >
              Update
            </button>
            <button
              type="button"
              className="w-full font-medium rounded-md bg-red-500 hover:bg-red-600 px-3 py-3 text-white"
              onClick={() => navigate(`/user/get/task/${task._id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
