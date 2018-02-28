import {combineReducers} from 'redux';
import {GET_IMMEDIATE_SUCCESS,NEW_IMMEDIATE_SUCCESS,DELETE_IMMEDIATE_SUCCESS} from "../actions/immediateActions";



function list(state=[], action){
    switch(action.type){
        case GET_IMMEDIATE_SUCCESS:
            return action.immediateA;
        case NEW_IMMEDIATE_SUCCESS:
            return [ ...state, action.immediateA];
        case DELETE_IMMEDIATE_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.actionId;
            });
            return acualList;
        default:
            return state;
    }
}


const immediateReducer = combineReducers({
    list:list,
});

export default immediateReducer;
