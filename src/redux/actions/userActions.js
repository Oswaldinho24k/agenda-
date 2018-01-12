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
      localStorage.setItem('userToken',JSON.stringify(r.token));
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
  localStorage.removeItem('userToken')
  dispatch(logOutSuccess())
};
