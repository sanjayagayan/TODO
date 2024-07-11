import express from "express";
import AuthController from "../controllers/authController.js";
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router.post("/user/register", AuthController.userRegistration);
router.post("/user/login", AuthController.userLogin);
router.get("/user/:id", checkIsUserAuthenticated, AuthController.getSingleUser);

//Protected Routes

router.get("/get/alltasks",checkIsUserAuthenticated,TaskController.getAllTasks);
router.post("/add/task", checkIsUserAuthenticated, TaskController.addNewTask);
router.put("/update/task/:id",checkIsUserAuthenticated,TaskController.updateTask);
router.get("/get/task/:id",checkIsUserAuthenticated,TaskController.getSingleTask);
router.delete("/delete/task/:id",checkIsUserAuthenticated,TaskController.deleteTask);

export default router;
