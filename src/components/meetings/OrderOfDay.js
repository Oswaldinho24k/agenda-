import React from 'react';
import {
  Step,
  Stepper,
  StepButton
} from 'material-ui/Stepper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';


const OrderOfDay = ({order,open,onDelete,changeDone,isStaff,disabled,active}) => (
      <div style={{maxWidth: 390, maxHeight: 400, margin: 'auto'}}>
        <Stepper linear={false} activeStep={"5"} orientation="vertical" style={{overflow:'auto',maxHeight:'235px',overflowX:'hidden'}}>
            {order.map ((data , i)=>  <Step key={i} completed={data.status} active={false} style={{boxSizing: 'border-box',display:'flex', padding:'none'}}>
              <StepButton style={{height:'0px',paddingRight:'none'}} onClick={()=>changeDone(data.id,data.status)}  disabled={!isStaff? disabled:active}>
                {data.name_order}
              </StepButton>
              {isStaff?<IconButton tooltip="Eliminar orden" onClick={()=>onDelete(data.id)}>
                <Delete color="#c7c7c7" />
              </IconButton>:<p> ...</p>}
            </Step>

          )}
        </Stepper>
          {isStaff? <div style={style.btn}>
            <FloatingActionButton mini={true} onClick={open}>
              <ContentAdd />
            </FloatingActionButton>
          </div>:null}
      </div>
    );

const style = {
  btn:{
    bottom:'1px',
    textAlign:'end'
  },
};
export default OrderOfDay;
