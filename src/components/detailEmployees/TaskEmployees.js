import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import moment from 'moment'


const TaskEmployees = ({tasks}) => (

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
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Date Start</TableHeaderColumn>
              <TableHeaderColumn>Date Finsh</TableHeaderColumn>
              <TableHeaderColumn> priority</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {tasks.map(row => <TableRow key={row.id} data-my-row-identifier={row.id}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
              <TableRowColumn>{moment(row.start).format('YYYY-MM-DD')}</TableRowColumn>
              <TableRowColumn>{moment(row.expiry).format('YYYY-MM-DD')}</TableRowColumn>
              <TableRowColumn><p>{row.priority}</p></TableRowColumn>
              </TableRow>

            )}
          </TableBody>
          </Table>

      </div>
    );

export default TaskEmployees;
