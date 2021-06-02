import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { leaderboardsReducer } from './leaderboardsReducer';
import { challengesReducer } from './challengesReducer';

export default combineReducers({
  leaderboards: leaderboardsReducer,
  challenges: challengesReducer,
  errors: errorReducer,
  auth: authReducer,
});
