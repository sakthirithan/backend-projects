import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL || process.env.MONGO_URL_NON_SRV);
        console.log(`✅MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌MongoDB connection error: ", err);
        process.exit(1);
    }
}

export default connectDB;