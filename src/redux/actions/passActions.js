import api from '../../Api/Django';
//change password
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';

export function changePasswordSuccess(password){
    return{
        type:CHANGE_PASSWORD_SUCCESS, password
    }
}

export const changePass=(password)=>(dispatch, getState)=>{
    return api.changePass(password)
        .then(r=>{
            dispatch(changePasswordSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};
