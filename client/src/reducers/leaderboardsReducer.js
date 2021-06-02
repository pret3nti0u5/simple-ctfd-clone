import { GET_LEADERBOARD, LEADERBOARD_LOADING } from '../actions/types';
const INITIAL_STATE = {
  leaderboards: [],
  loading: false,
};

export const leaderboardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LEADERBOARD:
      return { ...state, leaderboards: action.payload, loading: false };
    case LEADERBOARD_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
