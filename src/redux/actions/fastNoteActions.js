import api from '../../Api/Django';

//New Meeting

export const NEW_FAST_NOTE_SUCCESS = 'NEW_FAST_NOTE_SUCCESS';

export function newFastNoteSuccess(fastnote){
  return{
    type:NEW_FAST_NOTE_SUCCESS, fastnote
  }
}

export const newFastNote=(fastnote)=>(dispatch,getState)=>{
  let user = getState().user.object.id;
  fastnote['user_id']=user
  console.log(user)
  return  api.newFastNote(fastnote)
    .then(r=>{
      console.log(r);
      dispatch(newFastNoteSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

//Get FAst Note

export const GET_FAST_NOTE_SUCCESS = 'GET_FAST_NOTE_SUCCESS';

export function getFastNoteSuccess(fastnote){
    return{
        type:GET_FAST_NOTE_SUCCESS, fastnote
    }
}

export const getFastNote=()=>(dispatch, getState)=>{
    return api.getFastNote()
        .then(r=>{
            dispatch(getFastNoteSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//Edit Fastnote

export const EDIT_FAST_NOTE_SUCCESS = 'EDIT_FAST_NOTE_SUCCESS';
export function editFastNoteSuccess(fastnote){
    return{
      type: EDIT_FAST_NOTE_SUCCESS, fastnote
    }
}

export const editFastNote=(fastnote)=>(dispatch, getState)=>{

    return api.editFastNote(fastnote)
        .then(r=>{

            dispatch(editFastNoteSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};

// Delete Fastnote


export const DELETE_FAST_NOTE_SUCCESS = 'DELETE_FAST_NOTE_SUCCESS';

export function deleteFastNoteSuccess(fastnoteId){
    return {
        type:DELETE_FAST_NOTE_SUCCESS, fastnoteId
    }
}

export const deleteFastNote=(fastnoteId)=>(dispatch, getState)=>{
    return api.deleteFastNote(fastnoteId)
        .then(r=>{
            dispatch(deleteFastNoteSuccess(fastnoteId))
        }).catch(e=>{
            throw e;
        })
};
