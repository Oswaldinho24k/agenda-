import React from 'react';
import * as $ from "jquery";
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import {greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

const styledIconButton = {
    width: 40,
    height: 40,

};

class Events extends React.Component {
    render() {
        return <div id='external-events'>
            <h4 style={{color: "#778BA7"}}>TAREAS</h4>
            <List>
                <ListItem className='fc-event' primaryText="Congreso de términos"
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
                <ListItem className='fc-event' primaryText="Junta matriarcal"
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
                <ListItem className='fc-event' primaryText="Consejo"
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
                <ListItem className='fc-event' primaryText="Técnicas ad."
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
                <ListItem className='fc-event' primaryText="Recursividad"
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
                <ListItem className='fc-event' primaryText="Usos funcionales"
                          style={{backgroundColor: "white", marginBottom: "1%"}}
                          leftAvatar={<Avatar icon={<CheckCircle hoverColor={greenA200}/>}/>}/>
            </List>

        </div>;
    }

    componentDidMount() {
        $('#external-events .fc-event').each(function () {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    }
}

export default Events;