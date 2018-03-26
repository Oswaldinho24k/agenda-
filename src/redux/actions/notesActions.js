import api from '../../Api/Django';

//Get Notes

export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';

export function getNotesSuccess(notes){
    return{
        type:GET_NOTES_SUCCESS, notes
    }
}

export const getNotes=()=>(dispatch, getState)=>{
    return api.getNotes()
        .then(r=>{
            dispatch(getNotesSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New NOTES

export const NEW_NOTES_SUCCESS = 'NEW_NOTES_SUCCESS';

export function newNotesSuccess(notes){
  return{
    type:NEW_NOTES_SUCCESS, notes
  }
}

export const newNotes=(notes)=>(dispatch,getState)=>{
  console.log(notes)
  return  api.newNotes(notes)
    .then(r=>{
      console.log("encuentra esto",r);
      dispatch(newNotesSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete Notes


export const DELETE_NOTES_SUCCESS = 'DELETE_NOTES_SUCCESS';

export function deleteNotesSuccess(notesId){
    return {
        type:DELETE_NOTES_SUCCESS, notesId
    }
}

export const deleteNotes=(notesId)=>(dispatch, getState)=>{
    return api.deleteNotes(notesId)
        .then(r=>{
            dispatch(deleteNotesSuccess(notesId))
        }).catch(e=>{
            throw e;
        })
};

//Edit Note

export const EDIT_NOTES_SUCCESS = 'EDIT_NOTES_SUCCESS';
export function editNotesSuccess(notes){
    return{
        type:EDIT_NOTES_SUCCESS, notes
    }
}

export const editNotes=(notes)=>(dispatch, getState)=>{

    return api.editNotes(notes)
        .then(r=>{
            dispatch(editNotesSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
