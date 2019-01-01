import { put, call, take, takeLatest } from 'redux-saga/effects';

function delay(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}

// Fetch data every 5 seconds                                           
function* pollData() {
  try {
    yield call(delay, 5);
    yield put(dataFetch());
  } catch (error) {
    // cancellation error -- can handle this if you wish
    return;
  }
}

// Wait for successful response, then fire another request
// Cancel polling if user logs out                                         
function* watchPollData() {
  while (true) {
    yield take(DATA_FETCH_SUCCESS);
    yield race([
      call(pollData),
      take(USER_LOGOUT),
    ]);
  }
}

const sagas = [
  fork(watchPollData)
];

export default sagas;
