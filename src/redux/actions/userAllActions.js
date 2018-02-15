import api from '../../Api/Django';

//user Get USER
export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';

export function getAllUserSuccess(userAll){
    return{
        type:GET_ALL_USER_SUCCESS, userAll
    }
}

export const getAllUser=()=>(dispatch, getState)=>{
    return api.getAllUser()
        .then(r=>{
            dispatch(getAllUserSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};
