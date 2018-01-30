import {combineReducers} from 'redux';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
import profileReducer from './profileReducer';
import passwordReducer from './passwordReducer';
import employeesReducer from './employeesReducer'
const rootReducer = combineReducers({
user:userReducer,
register:registerReducer,
profile:profileReducer,
password:passwordReducer,
employees:employeesReducer,
});

export default rootReducer;
