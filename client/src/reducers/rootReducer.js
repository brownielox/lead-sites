import {combineReducers} from 'redux';
import positions from './stuffReducer';
import likes from './likesReducer'
import dislikes from './dislikesReducer'

const rootReducer = combineReducers({
  positions,
  likes,
  dislikes
});

export default rootReducer;
