import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoEye, IoEyeOff } from "react-icons/io5";

function UserLogin() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validatePassword(input.password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one number, one uppercase and one lowercase letter."
      );
      return;
    }
    try {
      const res = await axios.post(
        "https://todo-backend-rose.vercel.app/api/v1/user/login",
        input
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);
      alert("Login successfully!");
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" bg-white w-full h-auto py-16 px-6">
          <div className="relative mx-auto w-full max-w-sm  py-6 pb-8 rounded-xl sm:rounded-xl px-6 border-[1px] border-black/10 sm:px-10">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Sign in
                </h1>
                <p className="mt-2 text-gray-500">
                  Sign in below to access your account
                </p>
              </div>
              <div className="mt-5">
                <form onSubmit={handleLogin}>
                  <div className="relative mt-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Email Address"
                      className="peer mt-2 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      autoComplete="NA"
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      placeholder="Password"
                      className="peer peer mt-2 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Password
                    </label>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full font-medium rounded-md bg-blue-500 hover:bg-blue-700 px-3 py-3 text-white"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <p className="text-center text-sm text-gray-500">
                      Don&apos;t have an account yet?
                    </p>
                    <Link to="/register">
                      {" "}
                      <p className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none cursor-pointer hover:text-blue-500">
                        Sign up
                      </p>{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
