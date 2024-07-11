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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, () => {
    console.log(`API is running on ${port}`);
});



