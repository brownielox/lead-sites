import initialState from './initialState';
import { ADD_LIKES, LOAD_LOCATIONS } from '../actions/actionTypes';
import fetch from 'isomorphic-fetch'

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_LOCATIONS:
      newState = action.locations;
      return newState;
    case ADD_LIKES:
    //shallow copy so as not to mutate state
      newState = [...state];
      newState[action.data.i].likes++;
      return newState
    default:
      return state;
  }
}
//send api call to update location

//add 1 to likes for this leadsite in redux state
