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
           <TableRowColumn>{data.name}</TableRowColumn>
           <TableRowColumn>{data.meeting_date}</TableRowColumn>
           <TableRowColumn>{data.user.username}</TableRowColumn>
           <TableRowColumn><Link to={`/agenda/meeting/${data.id}`}>Detalle</Link></TableRowColumn>
         </TableRow>

       );

};

export default TableComponents;
