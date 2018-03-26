import {combineReducers} from 'redux';
import {SAVE_MEETING_SUCCESS,GET_MEETING_SUCCESS,EDIT_MEETING_SUCCESS, GET_MY_MEETING_SUCCESS,DELETE_MEETING_SUCCESS} from "../actions/meetingActions";



function list(state=[], action){
    switch(action.type){
        case SAVE_MEETING_SUCCESS:
            return [...state,action.meeting];
        case GET_MEETING_SUCCESS:
            return action.meeting;
        case EDIT_MEETING_SUCCESS:
            let filtrados = state.filter(a=>{
              return a.id !== action.meeting.id
            })
            return [...filtrados,action.meeting ];
        case DELETE_MEETING_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.meetingId;
            });
            return acualList;
        default:
            return state;
    }
}
function myMeetings(state=[], action){
  switch (action.type){
    case GET_MY_MEETING_SUCCESS:
        return action.myMeeting
    case SAVE_MEETING_SUCCESS:
        return [...state,action.meeting];
    case EDIT_MEETING_SUCCESS:
        let filtrados = state.filter(a=>{
          return a.id !== action.meeting.id
        })
        return [...filtrados,action.meeting ];
    case DELETE_MEETING_SUCCESS:
        let acualList = state.filter(a=>{
        return a.id!==action.meetingId;
        });
        return acualList;
    default:
    return state;
  }
}

const meetingReducer = combineReducers({
    list:list,
    myMeetings:myMeetings
});

export default meetingReducer;
