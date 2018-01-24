import {combineReducers} from 'redux';
import {GET_PROFILE_SUCCESS,SAVE_PROFILE_SUCCESS} from "../actions/profileActions";



function object(state={}, action){
    switch(action.type){
        case SAVE_PROFILE_SUCCESS:
            //let  updatedProfile = Object.assign({},action.profile)
            //return updatedProfile
            return action.profile;
        case GET_PROFILE_SUCCESS:
            return action.profile;
        default:
            return state;
    }
}


const registerReducer = combineReducers({
    object:object,
});

export default registerReducer;
