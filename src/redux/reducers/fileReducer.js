import {combineReducers} from 'redux';
import {GET_FILE_SUCCESS,SAVE_FILE_SUCCESS,DELETE_FILE_SUCCESS} from "../actions/fileActions";



function list(state=[], action){
    switch(action.type){
        case GET_FILE_SUCCESS:
            return action.file;
        case SAVE_FILE_SUCCESS:
            console.log(action.file)
            return [ ...state, action.file];
        case DELETE_FILE_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.fileId;
            });
            return acualList;
        default:
            return state;
    }
}


const fileReducer = combineReducers({
    list:list,
});

export default fileReducer;
