import { combineReducers } from 'redux';

import app from './app/reducer';
import user from './user/reducer';
import post from './post/reducer';

const rootReducer = combineReducers({
  app,
  user,
  post,
});

export default rootReducer;
