import express from "express";
import { addPost, getPosts } from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", getPosts);
routes.post("/", addPost);

export default routes;
