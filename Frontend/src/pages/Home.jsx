import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import TaskAnimate from "../assets/taskAnimate.json";
import NotFoundAnimate from "../assets/notFound.json";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAllTasks = async () => {
      const res = await axios.get("https://todo-backend-rose.vercel.app/api/v1/get/alltasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTasks(res.data);
    };
    getAllTasks();
  }, []);

  const handleToggleComplete = async (task) => {
    const updatedTask = {
      ...task,
      status: task.status === "completed" ? "pending" : "completed",
    };

    const confirmMessage =
      task.status === "completed"
        ? "Are you sure you want to move this task to the pending state?"
        : "Is the task complete?";

    if (window.confirm(confirmMessage)) {
      try {
        await axios.put(
          `https://todo-backend-rose.vercel.app/api/v1/update/task/${task._id}`,
          updatedTask,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        alert("Task status updated successfully!");
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
        );
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      new Date(task.dueDate).toLocaleDateString().includes(searchQuery)
    );
  });

  return (
    <>
      <main className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-20">
        <div className="w-full bg-white my-10 sm:my-16">
          <div className="text-center flex justify-center items-center space-x-3">
            <Lottie
              animationData={TaskAnimate}
              loop={true}
              className="h-[230px] sm:h-[300px] "
            />
            <div className="flex flex-col text-6xl sm:text-8xl font-bold">
              <h1 className=" text-blue-600">TO</h1>
              <h1 className=" text-red-500">DO</h1>
            </div>
          </div>
          <div className="pb-3 sm:pb-8 w-full px-0 md:px-[60px] lg:px-[150px]">
            <input
              type="text"
              placeholder="Search Tasks..."
              className="p-4 border rounded w-full mb-4 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTasks && filteredTasks.length > 0 ? (
              filteredTasks.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="bg-blue-600 text-white text-center py-4">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                  </div>
                  <div className="">
                    <p className="text-gray-700 text-[16px] leading-relaxe p-6">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center px-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm ${
                          item.status === "completed"
                            ? "bg-green-200 text-green-800"
                            : "bg-yellow-200 text-yellow-800"
                        }`}
                      >
                        {item.status === "completed" ? "Completed" : "Pending"}
                      </span>
                      <input
                        type="checkbox"
                        className="form-checkbox h-6 w-6 text-blue-600 cursor-pointer"
                        checked={item.status === "completed"}
                        onChange={() => handleToggleComplete(item)}
                      />
                    </div>
                    <div className="flex justify-center items-center px-6 pt-6 pb-4 ">
                      <p className="w-full text-center text-black text-[18px] font-semibold bg-gray-200 px-4 py-3 rounded-md">
                        Date : {new Date(item.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="px-6 pb-6">
                      <Link to={`/user/get/task/${item._id}`}>
                        <button className="w-full bg-gray-500 hover:bg-black text-white font-semibold py-3 px-4 rounded-md">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center flex flex-col justify-center items-center py-4">
                <Lottie
                  animationData={NotFoundAnimate}
                  loop={true}
                  className="h-[120px]"
                />
                <h2 className="text-2xl font-bold text-gray-700 mt-[-20px] ml-2">
                  No tasks found!
                </h2>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
