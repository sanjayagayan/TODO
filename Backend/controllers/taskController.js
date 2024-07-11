import taskModel from "../models/taskModel.js";

class TaskController {
    static getAllTasks = async (req,res) => {
        try {
            const fetchAllTasks = await taskModel.find({user : req.user._id});
            return res.status(200).json(fetchAllTasks);
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
    static addNewTask = async (req,res) => {
        const {title,description,dueDate,status} = req.body;
        try {
            if(title && description && dueDate && status){
                const addTask = new taskModel({
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    status: status,
                    user: req.user._id,
                });
                const saveTask = await addTask.save();
                if(saveTask)
                {
                    return res.status(200).json({ message:"Task added successfully!"});
                }
            }else {
                return res.status(400).json({ message:"All fields are required!"});
            }
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
    static updateTask = async (req, res) => {
        const { id } = req.params;
        const { title, description, dueDate, status } = req.body;
        try {
            if (id) {
                const updatedTask = await taskModel.findByIdAndUpdate(
                    id,
                    { title, description, dueDate, status },
                    { new: true }
                );
                if (updatedTask) {
                    return res.status(200).json({ message: "Task updated successfully!", updatedTask });
                } else {
                    return res.status(404).json({ message: "Task not found" });
                }
            } else {
                return res.status(400).json({ message: "Invalid URL" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static deleteTask = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                const deletedTask = await taskModel.findByIdAndDelete(id);
                if (deletedTask) {
                    return res.status(200).json({ message: "Task deleted successfully!" });
                } else {
                    return res.status(404).json({ message: "Task not found" });
                }
            } else {
                return res.status(400).json({ message: "Invalid URL" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
    static getSingleTask = async (req,res) => {
        const { id} = req.params;
        try {
            if(id){
                const fetchTasksById = await taskModel.findById(id);
                return res.status(200).json(fetchTasksById);
            }else {
                return res.status(400).json({ message: "Invalid URL"});
            }
        } catch (error) {
            return res.status(400).json({ message: error.message});
        }
    };
}

export default TaskController;