import React from 'react';
import {
TableRow,
TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';


  const TableComponents = ({data, ...others,openDelete,openEdit})=>{
          return(
         <TableRow {...others} >
            {others.children[0] /* checkbox passed down from Table-Body*/}
           <TableRowColumn>{data.username}</TableRowColumn>
           <TableRowColumn>{data.email}</TableRowColumn>
           <TableRowColumn>{data.is_superuser ? "Admin":[(!data.is_staff ?"Usuario":"Project-Manager")]}</TableRowColumn>

           <TableRowColumn><Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={`/agenda/employees/${data.id}`}>Detalle</Link></TableRowColumn>
           <TableRowColumn className="column-Edit">
               <IconButton onClick={()=>openEdit(data)}>
                 <Edit color="#c7c7c7"/>
               </IconButton>
           </TableRowColumn>
           <TableRowColumn className="column-Delete" >
               <IconButton onClick={()=>openDelete(data)} >
                 <Delete color="#c7c7c7"/>
               </IconButton>
           </TableRowColumn>
         </TableRow>

       );

};

export default TableComponents;
