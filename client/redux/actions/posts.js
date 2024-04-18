import * as api from "../../apis";

// Action Declare here=============

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
  // return action
};

export const addPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.addPost(newPost);
    const action = { type: "CREATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
