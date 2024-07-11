import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTask from "./pages/AddTask";
import SingleTaskDetail from "./pages/SingleTaskDetail";
import EditTask from "./pages/EditTask";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-y-hidden">
          <Header/>
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/user/tasks/add" element={<AddTask />} />
            <Route path="/user/get/task/:id" element={<SingleTaskDetail />} />
            <Route path="/user/tasks/edit/:id" element={<EditTask />} />
          </Routes>
          </main>
          <Footer/>
        </div>
    </>
  );
};

export default App;



