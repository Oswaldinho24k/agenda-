import {combineReducers} from 'redux';
import {USER_REGISTER_SUCCESS} from "../actions/userActions";



function list(state={}, action){
    switch(action.type){

        case USER_REGISTER_SUCCESS:
            return state;
        default:
            return state;
    }
}


const registerReducer = combineReducers({
    list:list,
});

export default registerReducer;
