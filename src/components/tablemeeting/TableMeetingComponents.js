import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {
Table,
TableBody,
TableHeader,
TableHeaderColumn,
TableRow,
} from 'material-ui/Table';
import TableComponents from './TableComponents'

const TableMeetingComponents = ({meeting,opendelete,isStaff})=>{
return(
  <div className="box_cardTable">
    <Card className="cardConteidoTable">
     <CardTitle title="Reuniones" />
     <Table
       fixedHeader={true}
       height={'300px'}
       multiSelectable={true}
       >
         <TableHeader
          enableSelectAll={true}
           >
           <TableRow>
             <TableHeaderColumn>Nombre</TableHeaderColumn>
             <TableHeaderColumn>Día</TableHeaderColumn>
             <TableHeaderColumn>Project Manager</TableHeaderColumn>
             <TableHeaderColumn>Detalle</TableHeaderColumn>
             {isStaff?<TableHeaderColumn className="column-Delete">Eliminar</TableHeaderColumn>:null}
           </TableRow>
         </TableHeader>
         <TableBody >
           {meeting.map(row=> <TableComponents key={row.id} data={row} opendelete={opendelete} isStaff={isStaff}/>)}
         </TableBody>
        </Table>
     </Card>
  </div>
);

};

export default TableMeetingComponents;
/*

*/
