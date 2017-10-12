import {combineReducers} from 'redux';
import positions from './stuffReducer';
import locations from './locationsReducer'

const rootReducer = combineReducers({
  positions,
  locations
});

export default rootReducer;
