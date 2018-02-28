import {combineReducers} from 'redux';
import {CHANGE_PASSWORD_SUCCESS} from "../actions/passActions";



function list(state={}, action){
    switch(action.type){

        case CHANGE_PASSWORD_SUCCESS:
            return state;
        default:
            return state;
    }
}


const passwordReducer = combineReducers({
    list:list,
});

export default passwordReducer;
