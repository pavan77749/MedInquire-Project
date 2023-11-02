import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: true }));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);

// mongoose.set("strictQuery", false);
// const connectDB = () => {
//   try {
//     mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };
app.get("/", (req, res) => {
  res.send("Up and running");
});

app.listen(PORT, () => {
  //connectDB();
  console.log("Server up and running");
});
