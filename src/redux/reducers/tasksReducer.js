import {combineReducers} from 'redux';
import {GET_TASKS_SUCCESS,SAVE_TASK_SUCCESS} from "../actions/tasksActions";



function list(state=[], action){
    switch(action.type){
        case GET_TASKS_SUCCESS:
            return action.tasks;
        case SAVE_TASK_SUCCESS:
            return [ ...state, action.task];
        default:
            return state;
    }
}


const tasksReducer = combineReducers({
    list:list,
});

export default tasksReducer;
