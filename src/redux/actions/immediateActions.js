import api from '../../Api/Django';

//Get immediate Action

export const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS';

export function getActionSuccess(immediateA){
    return{
        type:GET_ACTION_SUCCESS, immediateA
    }
}

export const getAction=()=>(dispatch, getState)=>{
    return api.getAction()
        .then(r=>{
            dispatch(getActionSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New NOTES

export const NEW_ACTION_SUCCESS = 'NEW_ACTION_SUCCESS';

export function newActionSuccess(immediateA){
  return{
    type:NEW_ACTION_SUCCESS, immediateA
  }
}

export const newAction=(immediateA)=>(dispatch,getState)=>{
  console.log(immediateA)
  return  api.newAction(immediateA)
    .then(r=>{

      let meeting = getState().meeting.list.find(a=>{
        return a.id=r.meeting
      })
      r["meeting"]=meeting
      dispatch(newActionSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete Actcion


export const DELETE_ACTION_SUCCESS = 'DELETE_ACTION_SUCCESS';

export function deleteActionSuccess(immediateId){
    return {
        type:DELETE_ACTION_SUCCESS, immediateId
    }
}

export const deleteAction=(immediateId)=>(dispatch, getState)=>{
    return api.deleteAction(immediateId)
        .then(r=>{
            dispatch(deleteActionSuccess(immediateId))
        }).catch(e=>{
            throw e;
        })
};

//Edit Action

export const EDIT_ACTION_SUCCESS = 'EDIT_ACTION_SUCCESS';
export function editActionSuccess(immediateA){
    return{
        type:EDIT_ACTION_SUCCESS, immediateA
    }
}

export const editAction=(immediateA)=>(dispatch, getState)=>{

    return api.editAction(immediateA)
        .then(r=>{

            // let meeting = getState().meeting.list.find(a=>{
            //   return a.id=r.meeting
            // })
            // r["meeting"]=meeting
            dispatch(editActionSuccess(r))
            dispatch(getAction())
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
