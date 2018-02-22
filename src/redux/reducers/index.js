import {combineReducers} from 'redux';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import passwordReducer from './passwordReducer';
import employeesReducer from './employeesReducer';
import meetingReducer from './meetingReducer';
import userAllReducer from './userAllReducer';
import tasksReducer from './tasksReducer';
const rootReducer = combineReducers({
user:userReducer,
profile:profileReducer,
password:passwordReducer,
employees:employeesReducer,
meeting:meetingReducer,
userAll:userAllReducer,
tasks:tasksReducer,
});

export default rootReducer;
