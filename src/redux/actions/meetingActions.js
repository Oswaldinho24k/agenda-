import api from '../../Api/Django';

//New Meeting

export const SAVE_MEETING_SUCCESS = 'SAVE_MEETING_SUCCESS';

export function saveMeetingSuccess(meeting){
  return{
    type:SAVE_MEETING_SUCCESS, meeting
  }
}

export const saveMeeting=(meeting)=>(dispatch,getState)=>{
  let user = getState().user.object.id;
  meeting['user']=user
  console.log(user)
  return  api.newMeeting(meeting)
    .then(r=>{
      console.log(r);
      dispatch(saveMeetingSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

//Get Meeting

export const GET_MEETING_SUCCESS = 'GET_MEETING_SUCCESS';

export function getMeetingSuccess(meeting){
    return{
        type:GET_MEETING_SUCCESS, meeting
    }
}

export const getMeeting=()=>(dispatch, getState)=>{
    return api.getMeeting()
        .then(r=>{
            dispatch(getMeetingSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//Edit Meeting

export const EDIT_MEETING_SUCCESS = 'EDIT_MEETING_SUCCESS';
export function editMeetingSuccess(meeting){
    return{
        type:EDIT_MEETING_SUCCESS, meeting
    }
}

export const editMeeting=(meeting)=>(dispatch, getState)=>{

    return api.editMeeting(meeting)
        .then(r=>{

            dispatch(editMeetingSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
