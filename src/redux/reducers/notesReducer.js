import {combineReducers} from 'redux';
import {GET_NOTES_SUCCESS,NEW_NOTES_SUCCESS,DELETE_NOTES_SUCCESS,EDIT_NOTES_SUCCESS} from "../actions/notesActions";



function list(state=[], action){
    switch(action.type){
        case GET_NOTES_SUCCESS:
            return action.notes;
        case NEW_NOTES_SUCCESS:
            return [ ...state, action.notes];
        case DELETE_NOTES_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.notesId;
            });
            return acualList;
        case EDIT_NOTES_SUCCESS:
            return [...state.filter(a=>a.id!==action.notes.id),
                  Object.assign([], action.notes)]
        default:
            return state;
    }
}


const notesReducer = combineReducers({
    list:list,
});

export default notesReducer;
