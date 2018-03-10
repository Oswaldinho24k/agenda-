import {combineReducers} from 'redux';
import {SAVE_MEETING_SUCCESS,GET_MEETING_SUCCESS} from "../actions/meetingActions";



function list(state=[], action){
    switch(action.type){
        case SAVE_MEETING_SUCCESS:
            return [...state,action.meeting];
        case GET_MEETING_SUCCESS:
            return action.meeting;
        default:
            return state;
    }
}


const meetingReducer = combineReducers({
    list:list,
});

export default meetingReducer;
