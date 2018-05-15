import api from '../../Api/Django';
import {getProfile}from './profileActions'
import {getAllProfiles} from './employeesActions'
import {getAllUser} from './userAllActions'
import {getMeeting,getMyMeetings} from './meetingActions'
import {getTasks,getMyTasks} from './tasksActions';
import {getFile} from './fileActions';
import {getOrder} from './orderActions';
import {getNotes} from './notesActions';
import {getAction} from './immediateActions';

import {getProjects} from './projectActions';


import {getFastNote} from './fastNoteActions';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export function logInSuccess(user){
  return{
    type:LOG_IN_SUCCESS, user
  }
}


export const logIn =(data)=>(dispatch,getState)=>{

  return api.logIn(data)
    .then(r=>{

      localStorage.setItem('userAgendaToken',JSON.stringify(r.key));
      console.log(r)
      dispatch(checkIfUser());
    }).catch(e=>{
      throw e
    })
};


//logout Acctions
export const LOG_OUT_SUCCESS ='LOG_OUT_SUCCESS';

export function logOutSuccess(){
  return{
    type:LOG_OUT_SUCCESS
  }
}

export const logOut=()=>(dispatch)=>{
  localStorage.removeItem('userAgendaToken')
  dispatch(logOutSuccess());
  dispatch(checkIfUser());
};

//user Get USER
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export function getUserSuccess(user){
    return{
        type:GET_USER_SUCCESS, user
    }
}

export const getUser=()=>(dispatch, getState)=>{
    return api.getUser()
        .then(r=>{
            dispatch(getUserSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//if there ar user
export const checkIfUser=()=>(dispatch, getState)=>{
    console.log(getState())
    const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
    console.log(userToken)
    if(userToken){
      //dispatch the functions
      dispatch(getUser()).then(r=>{
        console.log(getState())
        let user = getState().user.object

        if(user.is_staff){
          dispatch(getTasks());
          dispatch(getMyTasks());
          dispatch(getMeeting());
          dispatch(getMyMeetings());
        }else{
          dispatch(getMyTasks());
          dispatch(getMyMeetings());
        }
      });

      dispatch(getProfile());
      dispatch(getAllProfiles());
      dispatch(getAllUser());
      dispatch(getFile());
      dispatch(getOrder());
      dispatch(getNotes());
      dispatch(getAction());

      dispatch(getProjects());

      dispatch(getFastNote());

    }
};
