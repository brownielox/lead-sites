import initialState from './initialState';
import { ADD_LIKES, LOAD_LOCATIONS } from '../actions/actionTypes';

export default function stuff(state = [], action) {
  let newState;
  switch (action.type) {
    case LOAD_LOCATIONS:
      newState = action.data;
      return newState;
    case ADD_LIKES:
      newState = state.map(function(leadSite){
        return leadSite.id === action.leadSite.id ? action.leadSite : leadSite
      })
      return newState
    default:
      return state;
  }
}
//send api call to update location

//add 1 to likes for this leadsite in redux state
