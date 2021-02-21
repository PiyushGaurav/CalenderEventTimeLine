import {combineReducers} from 'redux';
import eventReducer from './events/eventReducer';

const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;
