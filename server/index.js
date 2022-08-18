import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reigonRoute from "./routes/reigonRoute.js"
const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(express.json());
app.use("/reigon", reigonRoute);


app.listen(process.env.PORT || 8000, () => {
  connect();
  console.log("Connected to Server");
});
