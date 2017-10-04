import {combineReducers} from 'redux';
import positions from './stuffReducer';
import likes from './likesReducer'

const rootReducer = combineReducers({
  positions,
  likes
});

export default rootReducer;
