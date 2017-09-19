import {combineReducers} from 'redux';
import positions from './stuffReducer';

const rootReducer = combineReducers({
  positions
});

export default rootReducer;
