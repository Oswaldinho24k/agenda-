import React from 'react';
import Events from './Events'
import Calendar from './Calendar';




class CalendarContainer extends React.Component {
    render() {
        return (
            <div>
                <Events/>
                <Calendar/>
            </div>
        );
    }
}

export default CalendarContainer;
