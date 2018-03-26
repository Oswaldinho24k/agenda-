import {combineReducers} from 'redux';
import {NEW_FAST_NOTE_SUCCESS,GET_FAST_NOTE_SUCCESS,EDIT_FAST_NOTE_SUCCESS,DELETE_FAST_NOTE_SUCCESS} from "../actions/fastNoteActions";



function list(state=[], action){
    switch(action.type){
        case NEW_FAST_NOTE_SUCCESS:
            return [...state,action.fastnote];
        case GET_FAST_NOTE_SUCCESS:
            return action.fastnote;
        case EDIT_FAST_NOTE_SUCCESS:
            let filtrados = state.filter(a=>{
              return a.id !== action.fastnote.id
            })
            return [...filtrados,action.fastnote ];
        case DELETE_FAST_NOTE_SUCCESS:
            let acualList = state.filter(a=>{
               return a.id!==action.fastnoteId;
            });
            return acualList;
        default:
            return state;
    }
}


const fastNoteReducer = combineReducers({
    list:list,
});

export default fastNoteReducer;
