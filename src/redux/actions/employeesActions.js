import api from '../../Api/Django';
//Get ALL Profiles
export const GET_ALL_PROFILES_SUCCESS = 'GET_ALL_PROFILES_SUCCESS';

export function getAllProfilesSuccess(employees){
    return{
        type:GET_ALL_PROFILES_SUCCESS, employees
    }
}
export const getAllProfiles=()=>(dispatch, getState)=>{
    return api.getAllProfiles()
        .then(r=>{
            dispatch(getAllProfilesSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};
