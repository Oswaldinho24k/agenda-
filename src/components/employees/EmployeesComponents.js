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

const EmployeesComponents = ({employees})=>{
  return(
      <div className="box_card">
        <Card className="cardContenido">
         <CardTitle title="Usuarios" />
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
               {employees.map(row=> <TableComponents key={row.id} data={row}/>)}
             </TableBody>
            </Table>
         </Card>
      </div>
  );

};

export default EmployeesComponents;
