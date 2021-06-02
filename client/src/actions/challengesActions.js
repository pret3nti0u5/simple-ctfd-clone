import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  GET_CHALLENGES,
  CHALLENGES_LOADING,
  SOLUTION_CORRECT,
  SOLUTION_WRONG,
  CLEAR_MSGS,
  CLEAR_SUCCESS,
} from './types';

export const getChallenges = () => async (dispatch) => {
  dispatch(setChallengesLoading());
  try {
    const res = await axios.get('/api/challenges', { withCredentials: true });
    dispatch({
      type: GET_CHALLENGES,
      payload: res.data,
    });
  } catch (e) {
    dispatch(returnErrors(e.response.data, e.response.status));
  }
};

export const submitSolution =
  (challengeId, userId, flag) => async (dispatch) => {
    try {
      const res = await axios.post(
        `/api/challenges/solution/${challengeId}`,
        {
          id: userId,
          flag,
        },
        { withCredentials: true }
      );
      dispatch({ type: SOLUTION_CORRECT, payload: res.data.msg });
    } catch (e) {
      dispatch({ type: SOLUTION_WRONG, payload: e.response.data.msg });
    }
  };

export const setChallengesLoading = () => {
  return {
    type: CHALLENGES_LOADING,
  };
};

export const clearChallengeMsgs = () => {
  return { type: CLEAR_MSGS };
};

export const clearSuccess = () => {
  return { type: CLEAR_SUCCESS };
};
