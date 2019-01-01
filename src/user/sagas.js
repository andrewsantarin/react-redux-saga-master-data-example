import { put, call, takeLatest } from 'redux-saga/effects';
import UserService from './service';
import { 
  GET_USERS,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
} from './actions';

export function* getUsersSaga() {
  yield put(getUsersRequest());
  try {
    const data = yield call(UserService.getUsers);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

// Export the effects without having to create function* generators and yield.
// https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
const sagas = [
  takeLatest(GET_USERS, getUsersSaga)
];

export default sagas;
