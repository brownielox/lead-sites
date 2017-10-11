import initialState from './initialState';
import { ADD_LIKES, ADD_DISLIKES } from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_DISLIKES:
      newState = state + 1;
      return newState;
    default:
      return state;
  }
}
