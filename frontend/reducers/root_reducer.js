import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({ 
    sessions: sessionReducer,
});

export default RootReducer;