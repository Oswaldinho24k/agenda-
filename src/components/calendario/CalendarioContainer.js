import React from 'react';
import Calendar from './Calendario';
import 'fullcalendar';

class CalendarioContainer extends React.Component {
    render() {
        let events = [
            {
                title: 'Egghead Recording',
                date: Date.now(),
                allDay: true
            }
        ];

        return (
            <div>
                <h1>Hello World</h1>
                <Calendar events={events}/>
            </div>
        );
    }
}

export default CalendarioContainer;