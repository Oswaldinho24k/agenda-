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

class VerticalLinearStepper extends React.Component {
    state = {
      stepIndex: null,
      visited: [],
    };


  render() {
    const {stepIndex, visited} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper linear={false} activeStep={"5"} orientation="vertical">
            {this.props.actions.map ((data , i)=>  <Step key={i} completed={data.status} active={false} style={{boxSizing: 'border-box'}}>
              <StepButton style={{height:'0px', minHeight:'3px'}}>
                {data.name_action}
              </StepButton>
            </Step>)}
          </Stepper>
      </div>
    );
  }
}

export default VerticalLinearStepper;
