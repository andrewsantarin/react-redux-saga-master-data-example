export const GET_USERS = 'GET_USERS';
export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
  };
}

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
    result: data.result,
  };
}

export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    error,
  };
}

export const SET_USER_REF = 'SET_USER_REF';
export function setUserRef(ref) {
  return {
    type: SET_USER_REF,
    ref,
  };
}
