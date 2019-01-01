import merge from 'lodash/merge';

import { GET_USERS_SUCCESS } from '../user/actions';
import { GET_POSTS_SUCCESS } from '../post/actions';

// This reducer manages the master data of the entire app.
// That means there's only one source of truth regardless of view.
// It doesn't matter whether you're browsing Users.jsx or Posts.jsx.
// Where there is overlap, it will be seen here.
export const INITIAL_STATE = {};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
    case GET_POSTS_SUCCESS:
      const { entities } = action.data;

      // Merge new data with the existing one.
      // Never take the old data away.
      return merge(state, entities);
    default:
      return state;
  }
}
