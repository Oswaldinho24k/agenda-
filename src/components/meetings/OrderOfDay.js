import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Grade from 'material-ui/svg-icons/action/grade';
import {red500} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class OrderOfDay extends React.Component {
    state = {
      stepIndex: null,
      visited: [],
    };

  render() {
    const {stepIndex, visited} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper linear={false} activeStep={"5"} orientation="vertical" style={{overflow:'auto',maxHeight:'235px'}}>
            {this.props.order.map ((data , i)=>  <Step key={i} completed={data.status} active={false} style={{boxSizing: 'border-box'}}>
              <StepButton style={{height:'0px'}} onClick={()=>this.props.changeDone(data.id,data.status)}>
                {data.name_action}
              </StepButton>
            </Step>)}
          </Stepper>
          <div style={style.btn}>
            <FloatingActionButton mini={true} onClick={this.props.open}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
      </div>
    );
  }
}
const style = {
  btn:{
    bottom:'1px',
    textAlign:'end'
  },
};
export default OrderOfDay;
