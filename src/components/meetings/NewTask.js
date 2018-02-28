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
      value:'Alta'},
      {id:2,
      value:'Media'},
      {id:3,
      value:'Baja'}
    ],
    disabled:true,
    active:false,
  }
}



  render() {
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
              {this.props.isStaff?<TableHeaderColumn></TableHeaderColumn>:null}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {this.props.tasks.map(row =>
              <TableRow key={row.id} data-my-row-identifier={row.id}>
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
                    { this.props.employees.map(data =>
                      <MenuItem key={data.id}  value={data.user.id}  primaryText={data.user.username} onClick={()=>this.props.addPerson(row.id, data.user.id)}/>
              )}
            </SelectField>:<p>{row.user === null? 'N/A':row.user.username}</p>}
              </TableRowColumn>
              <TableRowColumn>
                  {this.props.isStaff?<DatePicker
                      name='starts'
                     hintText={row.starts=== null?'Date':moment(row.start).format('YYYY-MM-DD')}
                     underlineStyle={{display :' none '}}
                     style={{fontSize:'13px'}}
                     hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                     textFieldStyle={{fontSize:'13px'}}
                     onChange={this.props.changeDateStart}
                     disabled={this.props.isStaff ? this.state.active:this.state.disabled}
                     onClick={()=>this.props.onDate(row.id)}
                     />:moment(row.start).format('YYYY-MM-DD')}
              </TableRowColumn>
              <TableRowColumn>
                {this.props.isStaff?<DatePicker
                  name='expiry'
                   hintText={row.expiry=== null?'Date': moment(row.expiry).format('YYYY-MM-DD')}
                   underlineStyle={{display :  ' none '}}
                   style={{fontSize:'13px'}}
                   hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                   textFieldStyle={{fontSize:'13px'}}
                   onClick={()=>this.props.onDate(row.id)}
                    onChange={this.props.changeDateFinish}
                   />:moment(row.expiry).format('YYYY-MM-DD')}
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
                </SelectField>:<p>{row.priority}</p>}
              </TableRowColumn>
              {this.props.isStaff ?<TableRowColumn>
                <IconButton onClick={()=>this.props.onDelete(row.id)}>
                  <Delete />
                </IconButton>
              </TableRowColumn>:null}
            </TableRow>)}
          </TableBody>
          </Table>

      </div>
    );
  }
}
