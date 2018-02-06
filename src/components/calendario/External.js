import React from 'react';
import * as $ from 'jquery';
import 'fullcalendar';

class External extends React.Component{
    componentDidMount() {
        $('#external-events .fc-event').each(function() {

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
    render(){
        return(
            <div id='external-events'>
                <h4>Draggable Events</h4>
                <div className='fc-event'>My Event 1</div>
                <div className='fc-event'>My Event 2</div>
                <div className='fc-event'>My Event 3</div>
                <div className='fc-event'>My Event 4</div>
                <div className='fc-event'>My Event 5</div>
                <p>
                    <input type='checkbox' id='drop-remove' />
                    <label for='drop-remove'>remove after drop</label>
                </p>
            </div>

        );

    }
}

export default External;