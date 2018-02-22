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

// Delete user


export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export function deleteUserSuccess(userId){
    return {
        type:DELETE_USER_SUCCESS, userId
    }
}

export const deleteUser=(userId)=>(dispatch, getState)=>{
    return api.deleteUser(userId)
        .then(r=>{
            dispatch(deleteUserSuccess(userId))
        }).catch(e=>{
            throw e;
        })
};

//User Registeruser
export const USER_REGISTER_SUCCESS='USER_REGISTER_SUCCESS';

export function userRegisterSuccess(register){
    return{
        type:USER_REGISTER_SUCCESS, register
    }
}

export const newUser =(register)=>(dispatch, getState)=>{
  console.log(register)
    return api.newUser(register)
      .then(r=>{
          console.log('is done',r);
          dispatch(userRegisterSuccess(r))
      }).catch(e=>{
      console.log(e)
  })
};

//Edit User
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export function editUserSuccess(euser){
    return{
        type:EDIT_USER_SUCCESS, euser
    }
}

export const editUser=(euser)=>(dispatch, getState)=>{

    return api.editUser(euser)
        .then(r=>{
            dispatch(editUserSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
