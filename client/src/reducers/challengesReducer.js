import {
  GET_CHALLENGES,
  CHALLENGES_LOADING,
  SOLUTION_CORRECT,
  SOLUTION_WRONG,
  CLEAR_MSGS,
  CLEAR_SUCCESS,
} from '../actions/types';
const INITIAL_STATE = {
  challenges: {},
  successMsg: null,
  failMsg: null,
  isSuccess: null,
  loading: false,
};

export const challengesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHALLENGES:
      return { ...state, challenges: action.payload, loading: false };
    case CHALLENGES_LOADING: {
      return { ...state, loading: true };
    }
    case SOLUTION_WRONG: {
      return { ...state, failMsg: action.payload };
    }
    case SOLUTION_CORRECT: {
      return { ...state, successMsg: action.payload, isSuccess: true };
    }
    case CLEAR_MSGS: {
      return { ...state, successMsg: null, failMsg: null };
    }
    case CLEAR_SUCCESS: {
      return { ...state, isSuccess: null };
    }
    default:
      return state;
  }
};
