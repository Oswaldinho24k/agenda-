import React from 'react';
import * as $ from "jquery";
import {List, ListItem} from 'material-ui/List'
import * as tasksActions from '../../redux/actions/tasksActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from '../common/Loading';


import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddTask from "./AddTask";


const styledIconButton = {
    width: 40,
    height: 40,

};

class Events extends React.Component {

    state = {
        open: false,
        newTask:[],
        menu:[{
            id:1,
            value:"Q3"
        },
            {
                id:2,
                value:"Q2"
            },
            {
                id:3,
                value:"Q1"
            }],
        priority:null


    };


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
        console.log("hey")
    }

    componentDidUpdate() {
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
        console.log("hey")
    }



    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = e => {
        let newTask = Object.assign({},this.state.newTask);
        newTask[e.target.name] = e.target.value;
        this.setState({newTask});
    };

    handleDatePickerChange = (e, date) => {
        let newTask = this.state.newTask;
        newTask['start'] = date;
        this.setState({
            newTask,

        });
        console.log("Demito newTask:", newTask)
    };

    handleDatePickerEnd = (e, date) => {
        console.log(date)
        let newTask = this.state.newTask;
        newTask['end'] = date;
        this.setState({
            newTask,

        });
        console.log("Demito newTask:", newTask)
    };

    handleSubmit = e => {
        e.preventDefault();
        let {newTask} = this.state;
        newTask['meeting_id']=null;
        newTask['user_id']=this.props.user.id;

        console.log("Event: ",this.state.newTask)
        this.props.tasksActions.saveTask(newTask);

    };


    priorityHandle = value =>{
        let newTask = this.state.newTask;
        newTask['priority']=value;
        this.setState({
            newTask
        })
        console.log("Dylan", newTask)
    }

    phandleChange = (event, index, value)=>{
        this.setState({
            priority:value
        })
    }



    render() {
        let {myTasks, fetched} = this.props;

        if(!fetched && myTasks.length >0)return<Loader/>

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];

        console.log("Mis tareas Papu", myTasks)
        return <div id='external-events'>
            <h4 style={{color: "#778BA7"}}>TAREAS</h4>


            <RaisedButton
                label="Agregar Tarea"
                onClick={this.handleOpen}
                icon={<NoteAdd/>}

            />



            <List>
                {myTasks.map((tasks, index)=>{
                    return <ListItem className='fc-event' primaryText={tasks.title} key={index} style={{backgroundColor: "white", marginBottom: "1%"}}/>

                })}
            </List>




            <Dialog
                title="Agregar nueva tarea"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={{width:'50%', minWidth:'250px'}}
                autoScrollBodyContent={true}
            >
                <AddTask
                    handleChange={this.handleChange}
                    onDatePickerChange={this.handleDatePickerChange}
                    onSubmit={this.handleSubmit}
                    handleDatePickerEnd={this.handleDatePickerEnd}

                    menu={this.state.menu}

                    priorityHandle={this.priorityHandle}
                    phandleChange={this.phandleChange}
                    priority = {this.state.priority}

                />
            </Dialog>




            <input type='checkbox' id='drop-remove' defaultChecked={true} hidden/>

        </div>;
    }

}

function mapsStateToProps(state, ownProps) {
    return{
        myTasks:state.tasks.myTasks,
        user:state.user.object,
        fetched:state.tasks.myTasks !== undefined && state.user.object !== undefined
    }
}

function mapDispatchToProps(dispatch) {
    return{
        tasksActions: bindActionCreators(tasksActions, dispatch)
    }
}

Events = connect(mapsStateToProps, mapDispatchToProps)(Events);

export default Events;