import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import moment from 'moment'


export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menu:[
      {id:1,
      value:'Q3'},
      {id:2,
      value:'Q2'},
      {id:3,
      value:'Q1'}
    ],
    disabled:true,
    active:false,
  }
}



  render() {
    let tasks = {};
    let user=this.props.isStaff;
    if(user){
      tasks=this.props.tasks
    }else{
      tasks=this.props.meeting.tasks
    }
    return (
      <div>
        <Table
           fixedHeader={true}
           height={'300px'}
           multiSelectable={true}
          >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            >
            <TableRow>
              <TableHeaderColumn>Nombre</TableHeaderColumn>
              <TableHeaderColumn>Usuario</TableHeaderColumn>
              <TableHeaderColumn>Fecha de Inicio</TableHeaderColumn>
              <TableHeaderColumn>Fecha de Fin</TableHeaderColumn>
              <TableHeaderColumn>Prioridad</TableHeaderColumn>
              {user?<TableHeaderColumn>Eliminar</TableHeaderColumn>:null}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {tasks.map(row =>
              <TableRow key={row.id}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>
                  {this.props.isStaff?<SelectField
                    underlineStyle={{display:'none'}}
                    autoWidth={true}
                    labelStyle={{paddingLeft:'none',paddingRigth:'none'}}
                    iconButton={null}
                    style={{fontSize:'13px',top:'7px'}}
                    maxHeight={200}
                    hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                     disabled={this.props.isStaff ? this.state.active:this.state.disabled}
                    hintText={row.user === null? 'Select':row.user.username}
                    >
                    { this.props.userAll.map(data =>
                      <MenuItem key={data.id}  value={data.id}  primaryText={data.username} onClick={()=>this.props.addPerson(row.id, data.id)}/>
              )}
            </SelectField>:<p>{row.user === null? 'N/A':row.user.username}</p>}
              </TableRowColumn>
              <TableRowColumn>
                  {this.props.isStaff?<DatePicker
                      name='starts'
                     hintText={row.starts=== null?'Date':moment(row.starts).format('YYYY-MM-DD')}
                     underlineStyle={{display :' none '}}
                     style={{fontSize:'13px'}}
                     hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                     textFieldStyle={{fontSize:'13px'}}
                     onChange={this.props.changeDateStart}
                     autoOk={true}
                     disabled={this.props.isStaff ? this.state.active:this.state.disabled}
                     onClick={()=>this.props.onDate(row.id)}
                     />:[(!row.starts ? "Sin asignar":  moment(row.starts).format('YYYY-MM-DD'))] }
              </TableRowColumn>
              <TableRowColumn>
                {this.props.isStaff?<DatePicker
                  name='expiry'
                   hintText={row.expiry=== null?'Date': moment(row.expiry).format('YYYY-MM-DD')}
                   underlineStyle={{display :  ' none '}}
                   style={{fontSize:'13px'}}
                   hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                   textFieldStyle={{fontSize:'13px'}}
                   autoOk={true}
                   onClick={()=>this.props.onDate(row.id)}
                    onChange={this.props.changeDateFinish}
                   />: [(!row.expiry ? "Sin asignar":  moment(row.expiry).format('YYYY-MM-DD'))]}
              </TableRowColumn>
              <TableRowColumn>
                {this.props.isStaff?<SelectField
                  underlineStyle={{display:'none'}}
                  autoWidth={true}
                  labelStyle={{paddingLeft:'none',paddingRigth:'none'}}
                  iconButton={null}
                  style={{fontSize:'13px',top:'7px'}}
                  maxHeight={200}

                  hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                  hintText={row.priority === ""? 'Select':row.priority}
                  >
                  { this.state.menu.map(data =>
                    <MenuItem key={data.id}  value={data.id}  primaryText={data.value} onClick={()=>this.props.addPriority(row.id, data.value)} />
                  )}
                </SelectField>:<p>{row.priority === ""? 'N/A':row.priority}</p>}
              </TableRowColumn>
              {this.props.isStaff ?<TableRowColumn>
                <IconButton onClick={()=>this.props.onDelete(row.id)}>
                  <Delete color="#c7c7c7" />
                </IconButton>
              </TableRowColumn>:null}
            </TableRow>)}
          </TableBody>
          </Table>

      </div>
    );
  }
}
