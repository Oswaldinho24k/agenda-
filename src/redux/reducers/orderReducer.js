import {combineReducers} from 'redux';
import {GET_ORDER_SUCCESS,NEW_ORDER_SUCCESS,DELETE_ORDER_SUCCESS,EDIT_ORDER_SUCCESS} from "../actions/orderActions";



function list(state=[], action){
    switch(action.type){
        case GET_ORDER_SUCCESS:
            return action.order;
        case NEW_ORDER_SUCCESS:
            return [ ...state, action.order];
        case DELETE_ORDER_SUCCESS:
            let acualList = state.filter(a=>{
            return a.id!==action.orderId;
            });
            return acualList;
        case EDIT_ORDER_SUCCESS:
            return [...state.filter(a=>a.id!==action.order.id),
                  Object.assign([], action.order)]
        default:
            return state;
    }
}


const orderReducer = combineReducers({
    list:list,
});

export default orderReducer;
