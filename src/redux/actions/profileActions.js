import api from '../../Api/Django';
//user Get Profile
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';

export function getProfileSuccess(profile){
    return{
        type:GET_PROFILE_SUCCESS, profile
    }
}

export const getProfile=()=>(dispatch, getState)=>{
    return api.getProfile()
        .then(r=>{
            dispatch(getProfileSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};
//save Profile
export const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
export function saveProfileSuccess(profile){
    return{
        type:SAVE_PROFILE_SUCCESS, profile
    }
}

export const saveProfile=(profile)=>(dispatch, getState)=>{
    return api.saveProfile(profile)
        .then(r=>{
            dispatch(saveProfileSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
