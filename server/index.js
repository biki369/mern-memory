import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/post.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// use routes
app.use("/posts", router);

const URL =
  "mongodb+srv://biki369:db321@cluster0.j46fh7r.mongodb.net/memoryDb?retryWrites=true&w=majority&appName=Cluster0";
// const URL = "mongodb+srv://biki369:db321@cluster0.j46fh7r.mongodb.net/ ";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
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
