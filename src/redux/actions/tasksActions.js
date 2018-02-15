import api from '../../Api/Django';


//Get Meeting

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
      dispatch(saveTaskSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}
