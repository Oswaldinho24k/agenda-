import {combineReducers} from 'redux';
import {GET_PROFILE_SUCCESS} from "../actions/userActions";



function list(state={}, action){
    switch(action.type){

        case GET_PROFILE_SUCCESS:
            return action.profile;
        default:
            return state;
    }
}


const registerReducer = combineReducers({
    list:list,
});

export default registerReducer;
