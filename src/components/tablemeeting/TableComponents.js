import React from 'react';
import {
TableRow,
TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router-dom';
import moment from 'moment'
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';


  const TableComponents = ({data, ...others,opendelete,isStaff})=>{
          return(
         <TableRow {...others} >
            {others.children[0] /* checkbox passed down from Table-Body*/}
           <TableRowColumn>{data.name}</TableRowColumn>
           <TableRowColumn>{ moment(data.meeting_date).fromNow()}</TableRowColumn>
           <TableRowColumn>{data.user.username}</TableRowColumn>
           <TableRowColumn><Link style={{color:'black',textDecoration:'none',fontWeight:'bold'}} to={`/agenda/meeting/${data.id}`}>Detalle</Link></TableRowColumn>
           {isStaff?<TableRowColumn className="column-Delete" >
                 <IconButton onClick={()=>opendelete(data)} >
                   <Delete color="#c7c7c7"/>
                 </IconButton>
             </TableRowColumn>:null}
         </TableRow>

       );

};

export default TableComponents;
