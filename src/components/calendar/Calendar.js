import React from 'react';
import * as $ from 'jquery';
import 'fullcalendar';
import '../../../node_modules/fullcalendar/dist/fullcalendar.css';
import '../../../node_modules/jquery/dist/jquery.js';
import '../../../node_modules/jquery/dist/jquery.min';
import '../../../node_modules/jquery-ui-dist/jquery-ui.min';
import '../../../node_modules/moment/moment.js';

import './Calendar.css';

const style = {
    color: "white"
};

class Calendar extends React.Component {

    render() {
        return (
            <div>
                <div id="calendar"></div>

            </div>

        );
    }


    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                center: 'agendaWeek, month, agendaDay'
            },
            allDaySlot: false,
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


export default Calendar;
