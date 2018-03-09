import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MeetingsListUser from './MeetingsListUser';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import NoteMeeting from './NoteMeeting'
import OrderOfDay from './OrderOfDay'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../../redux/actions/orderActions';
import NewOrderOfDay from './NewOrderOfDay'
import NewNote from './NewNote'

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
          order:{},
          editOrder:{},
          newOrder:false,
          newNotes:false,
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
  ////Ordern del Dia
  openOrder=()=>{
    let {newOrder}=this.state
    newOrder =! newOrder
    this.setState({newOrder})
  }
  changeDone =(id,status)=>{
       let {editOrder} = this.state;
       editOrder['id']=id
       editOrder['status']= !status
      this.props.orderActions.editOrder(editOrder);
      console.log(editOrder)
  }
  //Note

  openNote=()=>{
     let {newNotes} = this.state
    newNotes =! newNotes
    this.setState({newNotes})
  }
//new note


  render(){
    return(
      <div style={{width:'25%',margin:'0px auto'}}>
        <NewOrderOfDay open={this.state.newOrder} close={this.openOrder} id={this.props.id}/>
        <NewNote open={this.state.newNotes} close={this.openNote} employees={this.props.employees} id={this.props.id}/>
        <Card style={{marginBottom:'5px'}}  expanded={this.state.expandable1}  onExpandChange={this.expandable1}>
          <CardHeader
            title="ORDEN DEL DIA"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{color:'white'}}
            style={{backgroundColor:"#63a2f1",textAlign:'start'}}
          />
          <CardText expandable={true} >
          {this.props.order.length <= 0 ? <RaisedButton primary={true} label="Agregar nueva orden del dia" style={style.btnNew} onClick={this.openOrder}/> :
           <OrderOfDay order={this.props.order} changeDone={this.changeDone} open={this.openOrder} isStaff={this.props.isStaff}/>}
          </CardText>
        </Card>
        <Card style={{marginTop:'5px',marginBottom:'5px'}} expanded={this.state.expandable2} onExpandChange={this.expandable2}>
          <CardHeader
            title="NOTAS"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{color:'white'}}
            style={{backgroundColor:"#63a2f1",textAlign:'start',color:'white'}}
          />
          <CardText expandable={true} style={{padding:'none',paddingBottom:'0px'}}>
            {this.props.notes.length<= 0 ?<RaisedButton primary={true} label="Agregar nueva nota" style={style.btnNew} onClick={this.openNote}/> :
            <NoteMeeting noteMe={this.props.notes} open={this.openNote} isStaff={this.props.isStaff}/>}
          </CardText>
        </Card>
        <Card style={{marginTop:'5px',marginBottom:'5px'}} containerStyle={{paddingBottom:'none'}} expanded={this.state.expandable3} onExpandChange={this.expandable3}>
          <CardHeader
            title="USUARIOS"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{textAlign:'start'}}
            titleStyle={{color:'white'}}
            style={{backgroundColor:"#63a2f1",textAlign:'start',}}
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


function mapStateToProps(state, ownProps) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return{
        orderActions:bindActionCreators(orderActions,dispatch),
    }
}

Acordion = connect(mapStateToProps, mapDispatchToProps)(Acordion);
export default Acordion;
