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

const TableMeetingComponents = ({meeting})=>{
return(
  <Card className="cardConte">
   <CardTitle title="Meetings" />
   <Table
     multiSelectable={true}
     >
       <TableHeader
        enableSelectAll={true}
         >
         <TableRow>
           <TableHeaderColumn>Name</TableHeaderColumn>
           <TableHeaderColumn>Meeting Date</TableHeaderColumn>
           <TableHeaderColumn>Project Manager</TableHeaderColumn>
           <TableHeaderColumn> </TableHeaderColumn>
         </TableRow>
       </TableHeader>
       <TableBody >
         {meeting.map(row=> <TableComponents key={row.id} data={row}/>)}
       </TableBody>
      </Table>
   </Card>
);

};

export default TableMeetingComponents;
/*

*/
