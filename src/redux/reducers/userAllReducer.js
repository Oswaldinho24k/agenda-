import {combineReducers} from 'redux';
import {GET_ALL_USER_SUCCESS,DELETE_USER_SUCCESS,USER_REGISTER_SUCCESS, EDIT_USER_SUCCESS} from "../actions/userAllActions";



function list(state=[], action){
    switch(action.type){
        case GET_ALL_USER_SUCCESS:
            return action.userAll;
        case DELETE_USER_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.userId;
            });
           return acualList;
        case USER_REGISTER_SUCCESS:
            return [...state, action.register];
        case EDIT_USER_SUCCESS:
            return [...state.filter(a=>a.id!==action.euser.id),
              Object.assign([], action.euser)]
        default:
            return state;
    }
}


const userAllReducer = combineReducers({
    list:list,
});

export default userAllReducer;
