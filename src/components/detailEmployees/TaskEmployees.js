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
              <TableHeaderColumn>Nombre tarea</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Fecha de inicio</TableHeaderColumn>
              <TableHeaderColumn>Fecha de termino</TableHeaderColumn>
              <TableHeaderColumn>Prioridad</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {tasks.map(row => <TableRow key={row.id} data-my-row-identifier={row.id}>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
              <TableRowColumn>{moment(row.start).format('YYYY-MM-DD')}</TableRowColumn>
              <TableRowColumn>{!row.expiry ? "sin asingnar" : moment(row.expiry).format('YYYY-MM-DD')}</TableRowColumn>
              <TableRowColumn><p>{row.priority}</p></TableRowColumn>
              </TableRow>

            )}
          </TableBody>
          </Table>

      </div>
    );

export default TaskEmployees;
