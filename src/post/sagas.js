import { put, call, takeLatest } from "redux-saga/effects";
import PostService from "./service";
import {
  GET_POSTS,
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure
} from "./actions";

export function* getPostsSaga() {
  yield put(getPostsRequest());
  try {
    const data = yield call(PostService.getPosts);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailure(error));
  }
}

// Export the effects without having to create function* generators and yield.
// https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
const sagas = [takeLatest(GET_POSTS, getPostsSaga)];

export default sagas;
