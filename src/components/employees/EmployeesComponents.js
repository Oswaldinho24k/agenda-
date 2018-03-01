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

const EmployeesComponents = ({userAll,openDelete,openEdit})=>{
  return(
      <div className="box_card">
        <Card className="cardContenido">
         <CardTitle title="Usuarios" />
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
                 <TableHeaderColumn>Email</TableHeaderColumn>
                 <TableHeaderColumn>Puesto</TableHeaderColumn>
                 <TableHeaderColumn>Detalle </TableHeaderColumn>
                 <TableHeaderColumn className="column-Edit">Editar</TableHeaderColumn>
                 <TableHeaderColumn className="column-Delete">Eliminar</TableHeaderColumn>
               </TableRow>
             </TableHeader>
             <TableBody >
               {userAll.map(row=> <TableComponents openEdit={openEdit} openDelete={openDelete} key={row.id} data={row}/>)}
             </TableBody>
            </Table>
         </Card>
      </div>
  );

};

export default EmployeesComponents;
