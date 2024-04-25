import * as api from "../../apis";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constant/actionTypes";

// Action Declare here=============
export const getPosts = () => async (dispatch) => {
  // dispatch({ type: "LOADING",payload:{loading:true}});
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.addPost(newPost);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updatedPost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const linkPost = (id) => async (dispatch) => {
  try {
    await api.linkPost(id);
    dispatch({ type: LIKE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
