import express from "express";
import { addPost, getPosts, updatePost } from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", getPosts);
routes.post("/", addPost);
routes.patch("/:id", updatePost);

export default routes;
