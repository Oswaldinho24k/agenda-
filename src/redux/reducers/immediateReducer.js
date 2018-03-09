import {combineReducers} from 'redux';
import {GET_ACTION_SUCCESS,NEW_ACTION_SUCCESS,DELETE_ACTION_SUCCESS,EDIT_ACTION_SUCCESS} from "../actions/immediateActions";



function list(state=[], action){
    switch(action.type){
        case GET_ACTION_SUCCESS:
            return action.immediateA;
        case NEW_ACTION_SUCCESS:
            return [ ...state, action.immediateA];
        case DELETE_ACTION_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.immediateId;
            });
            return acualList;
        case EDIT_ACTION_SUCCESS:
            return [...state.filter(a=>a.id!==action.immediateA.id),
                  Object.assign([], action.immediateA)]
        default:
            return state;
    }
}


const immediateReducer = combineReducers({
    list:list,
});

export default immediateReducer;
