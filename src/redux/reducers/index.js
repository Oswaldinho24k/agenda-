import {combineReducers} from 'redux';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import passwordReducer from './passwordReducer';
import employeesReducer from './employeesReducer';
import meetingReducer from './meetingReducer';
import userAllReducer from './userAllReducer';
import tasksReducer from './tasksReducer';
import fileReducer from './fileReducer';
import immediateReducer from './immediateReducer';
const rootReducer = combineReducers({
user:userReducer,
profile:profileReducer,
password:passwordReducer,
employees:employeesReducer,
meeting:meetingReducer,
userAll:userAllReducer,
tasks:tasksReducer,
files:fileReducer,
immediate:immediateReducer,
});

export default rootReducer;
