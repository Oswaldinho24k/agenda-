import api from '../../Api/Django';

//Get Tasks

export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';

export function getTasksSuccess(tasks){
    return{
        type:GET_TASKS_SUCCESS, tasks
    }
}

export const getTasks=()=>(dispatch, getState)=>{
    return api.getTasks()
        .then(r=>{
            dispatch(getTasksSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New Task

export const SAVE_TASK_SUCCESS = 'SAVE_TASK_SUCCESS';

export function saveTaskSuccess(task){
  return{
    type:SAVE_TASK_SUCCESS, task
  }
}

export const saveTask=(task)=>(dispatch,getState)=>{
  return  api.newTask(task)
    .then(r=>{
      console.log(r);
      let meeting = getState().meeting.list.find(a=>{
        return a.id=r.meeting
      })
      r["meeting"]=meeting
      dispatch(saveTaskSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete Tasks


export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';

export function deleteTaskSuccess(taskId){
    return {
        type:DELETE_TASK_SUCCESS, taskId
    }
}

export const deleteTask=(taskId)=>(dispatch, getState)=>{
    return api.deleteTask(taskId)
        .then(r=>{
            dispatch(deleteTaskSuccess(taskId))
        }).catch(e=>{
            throw e;
        })
};

//Edit Task
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export function editTaskSuccess(etask){
    return{
        type:EDIT_TASK_SUCCESS, etask
    }
}

export const editTask=(etask)=>(dispatch, getState)=>{

    return api.editTask(etask)
        .then(r=>{

            // let meeting = getState().meeting.list.find(a=>{
            //   return a.id=r.meeting
            // })
            // r["meeting"]=meeting
            dispatch(editTaskSuccess(r))
            dispatch(getTasks())
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
