import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_USER_REF,
} from './actions';

export const INITIAL_STATE = {
  result: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.result,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case SET_USER_REF:
      return {
        ...state,
        ref: action.ref,
      };
    default:
      return state;
  }
}
