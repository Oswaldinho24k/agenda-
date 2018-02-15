import React from 'react';
import {
TableRow,
TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';


  const TableComponents = ({data, ...others})=>{
          return(
         <TableRow {...others} >
            {others.children[0] /* checkbox passed down from Table-Body*/}
           <TableRowColumn>{data.username}</TableRowColumn>
           <TableRowColumn>{data.email}</TableRowColumn>
           <TableRowColumn>{data.is_staff}</TableRowColumn>
           <TableRowColumn><Link to={`/agenda/employees/${data.id}`}>Detalle</Link></TableRowColumn>
         </TableRow>

       );

};

export default TableComponents;
