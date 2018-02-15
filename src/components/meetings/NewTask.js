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


export default class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
  }

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <div>
        <Table
           fixedHeader={true}
            height={'300px'}
          >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            >
            <TableRow>
              <TableHeaderColumn>Name Task</TableHeaderColumn>
              <TableHeaderColumn>Person</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Date Start</TableHeaderColumn>
              <TableHeaderColumn>Date Finsh</TableHeaderColumn>
              <TableHeaderColumn>Priority</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            >
            {this.props.tasks.map(row =>
              <TableRow key={row.id} >
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn
                >
                  <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    underlineStyle={{display:'none'}}
                    autoWidth={true}
                    labelStyle={{paddingLeft:'none',paddingRigth:'none'}}
                    iconButton={null}
                    style={{fontSize:'13px',top:'7px'}}
                    maxHeight={200}
                    hintStyle={{color:'rgba(0, 0, 0, 0.87)'}}
                    hintText={row.user === null ? " ": row.user.username  }
                    >
                    { this.props.employees.map(data =>
                      <MenuItem key={data.id} value={data.user.username}  primaryText={data.user.username} />
              )}
                  </SelectField>
              </TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
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
            </TableRow>)}
          </TableBody>
          </Table>

      </div>
    );
  }
}
