import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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


export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    disabled:true,
    active:false,
  }
}
  render() {

    let user=this.props.isStaff;
    let immediate = {};
    if(user){
      immediate=this.props.immediate
    }else{
      immediate=this.props.meeting.action
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
              <TableHeaderColumn>Persona</TableHeaderColumn>
              {user?<TableHeaderColumn>Eliminar</TableHeaderColumn>:null}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
              {immediate.map(row =>
                <TableRow key={row.id}>
                  <TableRowColumn>{row.text}</TableRowColumn>
                    <TableRowColumn>
                        {user?<SelectField
                          underlineStyle={{display:'none'}}
                          autoWidth={true}
                          labelStyle={{paddingLeft:'none',paddingRigth:'none'}}
                          iconButton={null}
                          style={{fontSize:'13px',top:'7px'}}
                          maxHeight={200}
                          hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                          disabled={user? this.state.active:this.state.disabled}
                          hintText={row.user === null? 'Select':row.user.username}
                          >
                          { this.props.userAll.map(data =>
                            <MenuItem key={data.id}  value={data.id}  primaryText={data.username} onClick={()=>this.props.addPersonAction(row.id, data.id)}/>
                    )}
                  </SelectField>:<p>{row.user === null? 'N/A':row.user.username}</p>}
                    </TableRowColumn>
                 {user?<TableRowColumn>
                    <IconButton onClick={()=>this.props.onDeleteAction(row.id)}>
                      <Delete color="#c7c7c7" />
                    </IconButton>
                  </TableRowColumn>:null}
                </TableRow>
          )}
          </TableBody>
          </Table>
      </div>
    );
  }
}
