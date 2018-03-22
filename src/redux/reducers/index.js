import {combineReducers} from 'redux';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import passwordReducer from './passwordReducer';
import employeesReducer from './employeesReducer';
import meetingReducer from './meetingReducer';
import userAllReducer from './userAllReducer';
import tasksReducer from './tasksReducer';
import fileReducer from './fileReducer';
import orderReducer from './orderReducer';
import notesReducer from './notesReducer';
import immediateReducer from './immediateReducer';
import fastNoteReducer from './fastNoteReducer';
const rootReducer = combineReducers({
user:userReducer,
profile:profileReducer,
password:passwordReducer,
employees:employeesReducer,
meeting:meetingReducer,
userAll:userAllReducer,
tasks:tasksReducer,
files:fileReducer,
order:orderReducer,
notes:notesReducer,
immediate:immediateReducer,
fastnote:fastNoteReducer
});

export default rootReducer;
