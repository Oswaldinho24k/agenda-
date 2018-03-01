import api from '../../Api/Django';

//Get order of Day

export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export function getOrderSuccess(order){
    return{
        type:GET_ORDER_SUCCESS, order
    }
}

export const getAction=()=>(dispatch, getState)=>{
    return api.getAction()
        .then(r=>{
            dispatch(getOrderSuccess(r))
            console.log(r)
        }).catch(e=>
            console.log(e)
        )
};

//New order of day

export const NEW_ORDER_SUCCESS = 'NEW_ORDER_SUCCESS';

export function newOrderSuccess(order){
  return{
    type:NEW_ORDER_SUCCESS, order
  }
}

export const newAction=(order)=>(dispatch,getState)=>{
  return  api.newAction(order)
    .then(r=>{
      console.log(r);
      let meeting = getState().meeting.list.find(a=>{
        return a.id=r.meeting
      })
      r["meeting"]=meeting
      dispatch(newOrderSuccess(r))
    }).catch(e=>{
      console.log(e)
    })
}

// Delete order of day


export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

export function deleteOrderSuccess(orderId){
    return {
        type:DELETE_ORDER_SUCCESS, orderId
    }
}

export const deleteAction=(orderId)=>(dispatch, getState)=>{
    return api.deleteTask(orderId)
        .then(r=>{
            dispatch(deleteOrderSuccess(orderId))
        }).catch(e=>{
            throw e;
        })
};

//Edit OrderOfDay

export const EDIT_ORDER_SUCCESS = 'EDIT_ORDER_SUCCESS';
export function editOrderSuccess(order){
    return{
        type:EDIT_ORDER_SUCCESS, order
    }
}

export const editAction=(order)=>(dispatch, getState)=>{

    return api.editAction(order)
        .then(r=>{

            let meeting = getState().meeting.list.find(a=>{
              return a.id=r.meeting
            })
            r["meeting"]=meeting
            dispatch(editOrderSuccess(r))
            console.log(r);
        }).catch(e=>{
        console.log(e)
    })
};
