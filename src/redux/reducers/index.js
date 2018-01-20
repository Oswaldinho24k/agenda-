import {combineReducers} from 'redux';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
const rootReducer = combineReducers({
user:userReducer,
register:registerReducer,
});

export default rootReducer;
