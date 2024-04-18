import axios from "axios";

const baseUrl = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(baseUrl);

export const addPost = (newPost) => axios.post(baseUrl, newPost);
