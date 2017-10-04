import initialState from './initialState';
import { ADD_LIKES } from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_LIKES:
      newState = state + 1;
      return newState;
    default:
      return state;
  }
}
