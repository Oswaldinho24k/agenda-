import {combineReducers} from 'redux';
import {GET_TASKS_SUCCESS,SAVE_TASK_SUCCESS,DELETE_TASK_SUCCESS,EDIT_TASK_SUCCESS} from "../actions/tasksActions";



function list(state=[], action){
    switch(action.type){
        case GET_TASKS_SUCCESS:
            return action.tasks;
        case SAVE_TASK_SUCCESS:
            return [ ...state, action.task];
        case DELETE_TASK_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.taskId;
            });
            return acualList;
        case EDIT_TASK_SUCCESS:
            console.log(action.etask)
            let noEditados = state.filter(edit=>{
              return edit.id!==action.etask.id;
            })
            console.log(noEditados)
            return [ ...noEditados, action.etask];
            // return [...state.filter(a=>a.id!==action.etask.id),
            //   Object.assign([], action.etask)]
        default:
            return state;
    }
}


const tasksReducer = combineReducers({
    list:list,
});

export default tasksReducer;
