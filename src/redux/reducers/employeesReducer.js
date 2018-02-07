import {combineReducers} from 'redux';
import {GET_ALL_PROFILES_SUCCESS} from "../actions/employeesActions";



function list(state=[], action){
    switch(action.type){
        case GET_ALL_PROFILES_SUCCESS:
            return action.employees;
        default:
            return state;
    }
}


const employeesReducer = combineReducers({
    list:list,
});

export default employeesReducer;
