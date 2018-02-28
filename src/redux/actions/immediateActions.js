import api from '../../Api/Django';

//Get Immediate Action

export const GET_IMMEDIATE_SUCCESS = 'GET_IMMEDIATE_SUCCESS';

export function getImmediateSuccess(immediateA){
    return{
        type:GET_IMMEDIATE_SUCCESS, immediateA
    }
}

export const getAction=()=>(dispatch, getState)=>{
    return api.getAction()
        .then(r=>{
            dispatch(getImmediateSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New Immediate Actions

export const NEW_IMMEDIATE_SUCCESS = 'NEW_IMMEDIATE_SUCCESS';

export function newImmediateSuccess(immediateA){
  return{
    type:NEW_IMMEDIATE_SUCCESS, immediateA
  }
}

export const newAction=(immediateA)=>(dispatch,getState)=>{
  return  api.newAction(immediateA)
    .then(r=>{
      console.log(r);
      let meeting = getState().meeting.list.find(a=>{
        return a.id=r.meeting
      })
      r["meeting"]=meeting
      dispatch(newImmediateSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete Immediate Actions


export const DELETE_IMMEDIATE_SUCCESS = 'DELETE_IMMEDIATE_SUCCESS';

export function deleteImmediateSuccess(actionId){
    return {
        type:DELETE_IMMEDIATE_SUCCESS, actionId
    }
}

export const deleteAction=(actionId)=>(dispatch, getState)=>{
    return api.deleteTask(actionId)
        .then(r=>{
            dispatch(deleteImmediateSuccess(actionId))
        }).catch(e=>{
            throw e;
        })
};
