import {combineReducers} from 'redux';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
import profileReducer from './profileReducer';
const rootReducer = combineReducers({
user:userReducer,
register:registerReducer,
profile:profileReducer,
});

export default rootReducer;
