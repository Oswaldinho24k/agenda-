import React from 'react';
import {
TableRow,
TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';
import moment from 'moment'


  const TableComponents = ({data, ...others})=>{
          return(
         <TableRow {...others} >
            {others.children[0] /* checkbox passed down from Table-Body*/}
           <TableRowColumn>{data.name}</TableRowColumn>
           <TableRowColumn>{ moment(data.meeting_date).fromNow()}</TableRowColumn>
           <TableRowColumn>{data.user.username}</TableRowColumn>
           <TableRowColumn><Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={`/agenda/meeting/${data.id}`}>Detalle</Link></TableRowColumn>
         </TableRow>

       );

};

export default TableComponents;
