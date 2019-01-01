import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './actions';

export const INITIAL_STATE = {
  result: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.result,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
