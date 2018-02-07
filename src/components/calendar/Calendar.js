import React from 'react';
import * as $ from 'jquery';
import 'fullcalendar';
import '../../../node_modules/fullcalendar/dist/fullcalendar.css';
import '../../../node_modules/jquery/dist/jquery.js';
import '../../../node_modules/moment/moment.js';

class Application extends React.Component {
    render() {
        return (
            <div>
                <Calendar/>
            </div>
        );
    }
}

/*
 * A simple React component
 */
class Calendar extends React.Component {
    render() {
        return (
            <div id="calendar"></div>
        );
    }

    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function () {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            }
        })
    }
}

export default Application;
