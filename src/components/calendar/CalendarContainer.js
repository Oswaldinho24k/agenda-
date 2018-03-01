import React from 'react';
import Events from './Events'
import Calendar from './Calendar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';



class CalendarContainer extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                iconElementLeft={<IconButton/>}
                style={{backgroundColor : '#93B9F4', height: '43px'}}
                />
                <Events/>
                <Calendar/>
            </div>
        );
    }
}

export default CalendarContainer;