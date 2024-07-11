import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type:String,
  },
  dueDate: {
    type:Date,
  }, 
  status: {
    type: String,
    default: 'pending',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "users"
  }
});

const taskModel = mongoose.model("tasks",taskSchema);

export default taskModel;

