import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./database/dbconnection.js";
dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;


connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDb connection error: ", err);
        process.exit(1);
    })

