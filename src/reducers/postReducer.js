import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS: {
      let posts = action.payload;

      return {
        posts
      };
    }

    case NEW_POST: {
      let newPost = action.payload;
      let posts = state.posts.slice(); // create copy of state
      posts.unshift(newPost); // add new post to beginning of array

      return {
        posts
      };
    }

    default:
      return state;
  }
}
