import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Connected to MongoDB');
        const connection = mongoose.connection;
        connection.once('open', () => {
            console.log('MongoDB database connection established successfully');
        });

    } catch (error) {
        console.log('MongoDB Error!');
    }
};


export default connectDB;