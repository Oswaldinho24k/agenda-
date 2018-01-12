import api from '../../Api/Django';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

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
    }).catch(e=>{
      console.log(e)
    })
};
export const LOG_OUT_SUCCESS ='LOG_OUT_SUCCESS';

export function logOutSuccess(){
  return{
    type:LOG_OUT_SUCCESS
  }
}

export const logOut=()=>(dispatch)=>{
  localStorage.removeItem('userAgendaToken')
  dispatch(logOutSuccess())
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
        }).catch(e=>{
            console.log(e)
        })
};
