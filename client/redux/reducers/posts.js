// const initialState = {
//     posts: [],
//     loading: false,
//     error: null
// };

import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constant/actionTypes";

const reducer = (posts =[], action) => {
  switch (action.type) {
    // case "LOADING":
    //     return [...posts];
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
      case  LIKE:
      case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      // return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
