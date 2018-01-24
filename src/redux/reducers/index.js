import {combineReducers} from 'redux';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
import profileReducer from './profileReducer';
import passwordReducer from './passwordReducer';
const rootReducer = combineReducers({
user:userReducer,
register:registerReducer,
profile:profileReducer,
password:passwordReducer,
});

export default rootReducer;
