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


export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:0};
  }

handleChange = (event, index, value) => this.setState({value});

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
              <TableHeaderColumn>Name Task</TableHeaderColumn>
              <TableHeaderColumn>Person</TableHeaderColumn>
              <TableHeaderColumn>Date Start</TableHeaderColumn>
              <TableHeaderColumn>Date Finsh</TableHeaderColumn>
              <TableHeaderColumn> priority</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {this.props.tasks.map(row =>
              <TableRow key={row.id} data-my-row-identifier={row.id}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>
                  <SelectField
                    value={this.state.value}
                    underlineStyle={{display:'none'}}
                    autoWidth={true}
                    labelStyle={{paddingLeft:'none',paddingRigth:'none'}}
                    iconButton={null}
                    style={{fontSize:'13px',top:'7px'}}
                    maxHeight={200}
                    hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                    onChange={this.handleChange}
                    >
                    { this.props.employees.map(data =>
                      <MenuItem key={data.id} value={data.user.id}  primaryText={data.user.username} onClick={()=>this.props.addPerson(row.id, data.user.id)}/>
              )}
                  </SelectField>
              </TableRowColumn>
              <TableRowColumn>
                  <DatePicker
                     hintText={row.starts}
                     underlineStyle={{display :' none '}}
                     style={{fontSize:'13px'}}
                     textFieldStyle={{fontSize:'13px'}}
                     />
              </TableRowColumn>
              <TableRowColumn>
                <DatePicker
                   hintText='Date'
                   underlineStyle={{display :  ' none '}}
                   style={{fontSize:'13px'}}
                   textFieldStyle={{fontSize:'13px'}}
                   />
              </TableRowColumn>
              <TableRowColumn>{row.priority}</TableRowColumn>
              <TableRowColumn>
                <IconButton onClick={()=>this.props.onDelete(row.id)}>
                  <Delete />
                </IconButton>
              </TableRowColumn>
            </TableRow>)}
          </TableBody>
          </Table>

      </div>
    );
  }
}
