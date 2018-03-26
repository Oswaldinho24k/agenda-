import React, {Fragment} from "react";
import {List, ListItem} from "material-ui";

export const TasksList = () => (
    <div id="external-events" >
        <h4 style={{color: "#778BA7"}}>TAREAS</h4>
        <List>
            <ListItem className='fc-event' primaryText="Congreso de términos" style={{backgroundColor: "white", marginBottom: "1%"}}/>
            <ListItem className='fc-event' primaryText="Junta matriarcal" style={{backgroundColor: "white", marginBottom: "1%"}}/>
            <ListItem className='fc-event' primaryText="Consejo" style={{backgroundColor: "white", marginBottom: "1%"}}/>
            <ListItem className='fc-event' primaryText="Tecnicas ad." style={{backgroundColor: "white", marginBottom: "1%"}}/>
            <ListItem className='fc-event' primaryText="Recursividad" style={{backgroundColor: "white", marginBottom: "1%"}}/>
            <ListItem className='fc-event' primaryText="Usos funcionales" style={{backgroundColor: "white", marginBottom: "1%"}}/>
        </List>
    </div>
);