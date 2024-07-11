import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setTimeout(() => {
        alert("Logout Successfull!");
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const addTask = () => {
    navigate("/user/tasks/add");
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <header className="bg-white text-black border-b-[1px] border-black/10 z-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-20">
          <div className="flex justify-between items-center py-3 sm:py-6">
            <div className=" flex-shrink-0 items-center">
              <Link to="/">
                <div className="flex items-center">
                  <p className=" flex text-[35px] font-black hover:text-blue-600">
                    TODO
                  </p>
                  <div className="pt-[10px]">
                    <p className="text-blue-500 text-8xl border-4 border-blue-500 rounded-full"></p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <div className="flex space-x-4"></div>
              <div className="relative">
                {token && username ? (
                  <>
                    <div className="flex gap-x-4">
                      <Link to="/user/tasks/add">
                        <button className=" text-white bg-blue-600 hover:bg-blue-700 font-medium px-7 py-3 rounded-lg">
                          Create Task
                        </button>
                      </Link>
                    <img
                      src="/user.svg"
                      alt="Avatar"
                      className="w-12 h-12 rounded-full cursor-pointer"
                      onClick={togglePopup}
                    />
                    </div>
                    
                    {isPopupOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10">
                        <div className="text-center my-4">
                          <img
                            className="h-20 w-20 rounded-full border-4 border-purple  mx-auto"
                            src="/user.svg"
                            alt="Avatar"
                          />

                          <div className="pt-2">
                            <h3 className="font-bold text-xl text-black mb-1">
                              {username}
                            </h3>
                            <div className="inline-flex text-black  items-center">
                              <p className="text-sm lowercase">
                                {username}@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pb-2 border-t-[1px] border-black/20">
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={addTask}
                          >
                            Add a New Task
                          </button>

                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={handleLogout}
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex space-x-3">
                      <Link to="/login">
                        <button className="text-blue-600 bg-bg-transparent hover:text-white hover:bg-blue-700 border-[1px] border-blue-500 hover:border-[1px] hover:border-blue-700 font-semibold rounded-md px-5 lg:px-7 py-3 lg:py-2.5 mr-2 ">
                          Sign in
                        </button>
                      </Link>
                      <Link to="/register">
                        <button className=" text-white bg-blue-500 hover:bg-blue-700 border-[1px] border-blue-500 font-medium rounded-md px-5 lg:px-7 py-3 lg:py-2.5 mr-2 ">
                          Create an account
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
                {menuOpen ? (
                  <IoClose className="h-10 w-10" aria-label="Close" />
                ) : (
                  <IoMenu className="h-10 w-10" aria-label="Menu" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <header className="text-white">
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-white">
            <div className="py-4 space-y-6 flex flex-col justify-center items-center">
              <Link to="/login">
                <button className="text-purple-950 bg-bg-transparent hover:text-white hover:bg-purple-900 border-[1px] border-purple-900 hover:border-[1px] hover:border-purple-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 ">
                  Sign in
                </button>
              </Link>
              <Link to="/register">
                <button className=" text-white bg-purple-900 border-[1px] border-purple-900 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 ">
                  Create an account
                </button>
              </Link>
            </div>
            <div className="px-5 py-4 flex justify-around"></div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
