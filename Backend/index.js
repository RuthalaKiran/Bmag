import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import {connectDB} from "./DBConfig/db.js";
import emailRoute from "./Routes/emailRoute.js";
import transporter from "./Config/Emailconfig.js";


// app config
const app = express();


dotenv.config();
console.log(process.env.PORT);


// middlewares
app.use(bodyparser.json());
app.use(express.json());    
app.use(cors());


// db connection
connectDB();


// api routes
app.use("/api/email", emailRoute);

// listen to the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
