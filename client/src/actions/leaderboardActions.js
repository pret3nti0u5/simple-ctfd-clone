import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_LEADERBOARD, LEADERBOARD_LOADING } from './types';

export const getLeaderboard = () => async (dispatch) => {
  dispatch(setLeaderboardLoading());
  try {
    const res = await axios.get('/api/leaderboards', { withCredentials: true });
    dispatch({
      type: GET_LEADERBOARD,
      payload: res.data,
    });
  } catch (e) {
    dispatch(returnErrors(e.response.data, e.response.status));
  }
};

export const setLeaderboardLoading = () => {
  return {
    type: LEADERBOARD_LOADING,
  };
};
