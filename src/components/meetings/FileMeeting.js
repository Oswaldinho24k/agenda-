import React from 'react';
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


const FileMeeting = ({files,isStaff,onDeleteFile}) => (

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
              <TableHeaderColumn className="column-LinkFile">Link</TableHeaderColumn>
              {isStaff?<TableHeaderColumn className="column-DeleteFile">Eliminar</TableHeaderColumn>:null}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            {files.map(row =>
              <TableRow key={row.id} data-my-row-identifier={row.id}>
              <TableRowColumn>{row.name_file}</TableRowColumn>
              <TableRowColumn className="column-LinkFile">
                  <a href={row.files} style={{color:'black',textDecoration:'none',fontWeight:'bold'}} target="_blank">ver</a>
              </TableRowColumn>
              {isStaff ?<TableRowColumn className="column-DeleteFile">
                <IconButton onClick={()=>onDeleteFile(row.id)}>
                  <Delete color="#c7c7c7" />
                </IconButton>
              </TableRowColumn>:null}
            </TableRow>)}
          </TableBody>
          </Table>
      </div>
    )

export default FileMeeting;
