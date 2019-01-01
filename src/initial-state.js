import { INITIAL_STATE as app } from './app/reducer';
import { INITIAL_STATE as user } from './user/reducer';
import { INITIAL_STATE as post } from './post/reducer';

const INITIAL_STATE = {
  app,
  user,
  post,
};

export default INITIAL_STATE;
