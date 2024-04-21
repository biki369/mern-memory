import express from "express";
import { addPost, getPosts, updatePost,deletePost ,linkPost} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/link-post', linkPost);

export default router;
