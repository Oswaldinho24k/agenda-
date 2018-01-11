import {combineReducers} from 'redux';
import {LOG_OUT_SUCCESS} from "../actions/userActions";



function object(state={}, action){
    switch(action.type){

        case LOG_OUT_SUCCESS:
            return state;
        default:
            return state;
    }
}


const userReducer = combineReducers({
    object:object,
});

export default userReducer
