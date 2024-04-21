import mongoose from "mongoose";
import PostMessages from "../models/postMessages.js";

export const getPosts = async (req, res) => {
   try {
    const postMessage = await PostMessages.find();
    res.status(200).json(postMessage); 
   } catch (error) {
    res.status(404).json({message: error.message});
   }
}
export const addPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessages(post)
    try {
      await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
    const updatedPost = await PostMessages.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
    // const { id } = req.params;
    // const { title, message, creator, selectedFile, tags } = req.body;
    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    // await PostMessages.findByIdAndUpdate(id, updatedPost, { new: true });
    // res.json(updatedPost);
}
export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // to working that one line
    // await PostMessages.findByIdAndRemove(id);
    await PostMessages.deleteOne({ _id: id });

    res.json({ message: "Post deleted successfully." });
}
export const linkPost = async (req, res) => {
    const { id } = req.params;
    // const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
    const post = await PostMessages.findById(id);
    const updatedPost = await PostMessages.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, { new: true });
    res.json(updatedPost);
}
