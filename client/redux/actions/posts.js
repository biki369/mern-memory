import * as api from "../../apis";

// Action Declare here=============

export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST"
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error
});

export const getPosts = () => async (dispatch) => {
  // if (dispatch({ type: "LOADING" })){
  //   api.fetchPosts().then((response) => {
  //     const action = { type: "FETCH_ALL", payload: response.data };
  //     dispatch(action);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }
  // else{
  //   api.fetchPosts().then((response) => {
  //     const action = { type: "FETCH_ALL", payload: response.data };
  //     dispatch(action);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  // dispatch({ type: "LOADING",payload:{loading:true}});

  try {
    const { data } = await api.fetchPosts();
    // const action = { type: "FETCH_ALL", payload: data }
    // dispatch(action);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
    // const response = await api.fetchPosts;
    // dispatch({ type: "FETCH_ALL", payload: response.data });
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

export const updatedPost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    const action = { type: "UPDATE", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
