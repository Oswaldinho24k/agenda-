import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
//import TableComponents from './TableComponents'
// <TableBody >
//   {employees.map(row=> <TableComponents key={row.id} data={row}/>)}
// </TableBody>
const ProjectComponents = ()=>{
  return(
    <Card className="cardConte">
     <CardTitle title="Projects" />
     <Table
       multiSelectable={true}
       >
         <TableHeader
          enableSelectAll={true}
           >
           <TableRow>
             <TableHeaderColumn>Username</TableHeaderColumn>
             <TableHeaderColumn>Name</TableHeaderColumn>
             <TableHeaderColumn>Email</TableHeaderColumn>
             <TableHeaderColumn> </TableHeaderColumn>
           </TableRow>
         </TableHeader>

        </Table>
     </Card>
  );

};

export default ProjectComponents;
