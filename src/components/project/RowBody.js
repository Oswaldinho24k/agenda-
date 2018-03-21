import React from 'react';
import Icon from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router-dom';
import moment from "moment";
import {IconButton,TableRow, TableRowColumn} from "material-ui";

export const RowBody = ({data, key, ...props}) => (
    <TableRow key={key} {...props} >
        {props.children[0]}
        <TableRowColumn>{data.name_project}</TableRowColumn>
        <TableRowColumn>{moment(data.created_date, "YYYY-MM-DD").format("DD MMM YYYY")}</TableRowColumn>
        <TableRowColumn>{moment(data.due_date, "YYYY-MM-DD").format("DD MMM YYYY")}</TableRowColumn>
        <TableRowColumn><p>{data.isCompleted ? "Sí" : "No"}</p></TableRowColumn>
        <TableRowColumn>
            <Link
                style={{color: 'black', textDecoration: 'none', fontWeight: 'bold'}}
                to={`/agenda/meeting/${data.id}`}>
                <IconButton>
                    <Icon/>
                </IconButton>
            </Link>
        </TableRowColumn>
    </TableRow>
);
