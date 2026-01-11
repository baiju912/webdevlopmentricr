import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import connectDB from "./src/config/dv.js";
import AuthRouter from "./src/routers/myRouter.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);



app.get("/", (req, res) => {
  console.log("server is running");
  res.json({message:"server is running sucessfully"});
});


app.use((err,req,res,next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StartCode = err.StartCode || 500;

  res.status(StartCode).json({message: ErrorMessage});

})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server strated at port", port);
  connectDB();
  console.log("Baiju");
  
});
