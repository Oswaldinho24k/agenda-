import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MeetingsListUser from './MeetingsListUser';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import NoteMeeting from './NoteMeeting'
import ImmediateActions from './ImmediateActions'

/*momentanea*/
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Acordion extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          expandable1:true,
          expandable2:false,
          expandable3:false,
      };
  }

  expandable1=()=>{
    let {expandable1}=this.state;
    expandable1 =!expandable1;
    this.setState({expandable1,expandable2:false,expandable3:false})
  }
  expandable2=()=>{
    let {expandable2}=this.state;
    expandable2 =!expandable2;
    this.setState({expandable2,expandable3:false,expandable1:false})
  }
  expandable3=()=>{
    let {expandable3}=this.state;
    expandable3 =!expandable3;
    this.setState({expandable3,expandable2:false,expandable1:false})
  }


  render(){
    return(
      <div style={{width:'25%',margin:'0px auto'}}>
        <Card style={{marginBottom:'5px'}}  expanded={this.state.expandable1}  onExpandChange={this.expandable1}>
          <CardHeader

            title="ORDEN DEL DIA"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{color:'white'}}
            style={{backgroundColor:'orange',textAlign:'start'}}
          />
          <CardText expandable={true} >
            <ImmediateActions actions={this.props.actions}/>
          </CardText>
        </Card>
        <Card style={{marginTop:'5px',marginBottom:'5px'}} expanded={this.state.expandable2} onExpandChange={this.expandable2}>
          <CardHeader
            title="NOTAS"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{color:'white'}}
            style={{backgroundColor:'orange',textAlign:'start',color:'white'}}
          />
          <CardText expandable={true} style={{padding:'none',paddingBottom:'0px'}}>
            <RaisedButton
              primary={true}
              label="Agregar nueva nota"
              style={style.btnNew}
              />
          </CardText>
        </Card>
        <Card style={{marginTop:'5px',marginBottom:'5px'}} containerStyle={{paddingBottom:'none'}} expanded={this.state.expandable3} onExpandChange={this.expandable3}>
          <CardHeader
            title="USUARIOS"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{textAlign:'start'}}
            titleStyle={{color:'white'}}
            style={{backgroundColor:'orange',textAlign:'start',}}
          />
        <CardText expandable={true} style={{padding:'none',paddingBottom:'0px'}}>
            <MeetingsListUser
              employees={this.props.employees}
              meeting={this.props.meeting}
              openListAdd={this.props.openListAdd}
              isStaff={this.props.isStaff}
              />
          </CardText>
        </Card>
      </div>
    );
  }
}
const style = {
  btnNew:{
    marginTop:'5px',
  }
};

export default Acordion;
