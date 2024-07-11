import express from 'express';
import connectDB from "./config/db.js"
import cors from "cors";
import authRoutes from "./routes/task.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is running!");
});

app.use("/api/v1",authRoutes);

app.listen(port, () => {
    console.log(`API is running on ${port}`);
});



