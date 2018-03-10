import api from '../../Api/Django';

//Get Tasks

export const GET_FILE_SUCCESS = 'GET_FILE_SUCCESS';

export function getFileSuccess(file){
    return{
        type:GET_FILE_SUCCESS, file
    }
}

export const getFile=()=>(dispatch, getState)=>{
    return api.getFile()
        .then(r=>{
            dispatch(getFileSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New File

export const SAVE_FILE_SUCCESS = 'SAVE_FILE_SUCCESS';

export function saveFileSuccess(file){
  return{
    type:SAVE_FILE_SUCCESS, file
  }
}

export const newFile=(file)=>(dispatch,getState)=>{
  return  api.newFile(file)
    .then(r=>{
      console.log(r);
      let meeting= getState().meeting.list.find(m=>{
        return m.id === r.meeting
      })
      r['meeting']= meeting
      dispatch(saveFileSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete Tasks


export const DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';

export function deleteFileSuccess(fileId){
    return {
        type:DELETE_FILE_SUCCESS, fileId
    }
}

export const deleteFile=(fileId)=>(dispatch, getState)=>{
    return api.deleteFile(fileId)
        .then(r=>{
            dispatch(deleteFileSuccess(fileId))
        }).catch(e=>{
            throw e;
        })
};
