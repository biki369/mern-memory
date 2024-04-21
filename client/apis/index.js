import axios from "axios";

const baseUrl = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(baseUrl);
export const addPost =  (newPost) => axios.post(baseUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${baseUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${baseUrl}/${id}`);
export const linkPost = (id) => axios.patch(`${baseUrl}/${id}/link-post`);
