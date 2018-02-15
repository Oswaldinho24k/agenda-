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

const EmployeesComponents = ({userAll})=>{
  return(
    <Card className="cardConte">
     <CardTitle title="Employees" />
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
         <TableBody >
           {userAll.map(row=> <TableComponents key={row.id} data={row}/>)}
         </TableBody>
        </Table>
     </Card>
  );

};

export default EmployeesComponents;
