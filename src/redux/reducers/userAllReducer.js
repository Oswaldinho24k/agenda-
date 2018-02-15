import {combineReducers} from 'redux';
import {GET_ALL_USER_SUCCESS} from "../actions/userAllActions";



function list(state=[], action){
    switch(action.type){
        case GET_ALL_USER_SUCCESS:
            return action.userAll;
        default:
            return state;
    }
}


const userAllReducer = combineReducers({
    list:list,
});

export default userAllReducer;
