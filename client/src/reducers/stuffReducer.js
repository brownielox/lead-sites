import initialState from './initialState';
import {UPDATE_LAT_LNG} from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UPDATE_LAT_LNG:
      newState = action.positions;
      return newState;
    default:
      return state;
  }
}
