export const GET_POSTS = 'GET_POSTS';
export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export function getPostsRequest() {
  return {
    type: GET_POSTS_REQUEST,
  };
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export function getPostsSuccess(data) {
  return {
    type: GET_POSTS_SUCCESS,
    data,
    result: data.result,
  }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export function getPostsFailure(error) {
  return {
    type: GET_POSTS_FAILURE,
    error,
  }
}
