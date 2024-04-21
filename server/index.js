import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/post.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// use routes
app.use("/posts", router);

// connect to db
const PORT = process.env.PORT || 5000;
const URL =  process.env.MONGODB_CONNECTED_URL

mongoose
  .connect( URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error", error.message);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
