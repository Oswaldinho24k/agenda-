import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Accesibility from 'material-ui/svg-icons/action/accessibility';
import Desempeno from 'material-ui/svg-icons/editor/insert-chart';
import Calendar from 'material-ui/svg-icons/action/date-range';
//Registermolda


class Calendario extends Component{

    constructor(props) {
        super(props);
        this.state = {
        open: false,
      };
    }


    handleToggle = () => this.setState({open: !this.state.open});

    render(){
        const {active} = this.state;
        return(
            <Drawer
                containerStyle={styles.draw}
                open={this.props.open}
                docked={true}
                width='20%'>
                <NavLink
                style={{ textDecoration: 'none',textAlign:'start' }}
                onClick={this.props.toogleDrawer}
                activeClassName="selected"
                activeStyle={{fontWeight: 'bold',}}
                exact
                to="/agenda/tasks">
                <MenuItem
                    style={active?styles.active:null}
                    primaryText="Tareas"
                    leftIcon={<NoteAdd/>}
                />
                </NavLink>
                {this.props.user.is_superuser === false ? null :
                <NavLink
                    style={{ textDecoration: 'none',textAlign:'start' }}
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{fontWeight: 'bold',}}
                    exact
                    to="/agenda/employees">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Empleados"
                        leftIcon={<Accesibility/>}
                    />
                </NavLink>}
                  <NavLink
                      style={{ textDecoration: 'none',textAlign:'start' }}
                      onClick={this.props.toogleDrawer}
                      activeClassName="selected"
                      activeStyle={{fontWeight: 'bold',}}
                      exact
                      to="/agenda/meeting">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Reuniones"
                        leftIcon={<Calendar/>}
                    />
                </NavLink>

                <NavLink
                    style={{ textDecoration: 'none',textAlign:'start' }}
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{fontWeight: 'bold'}}
                    exact
                    to="/agenda/project">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Proyectos"
                        leftIcon={<Desempeno/>}
                    />
                </NavLink>


            </Drawer>
        );
    }
}

const styles = {
    draw:{
      top:'50px',

    },
    active:{
        backgroundColor:'red',
        textAlign:'start'
    }
};

export default Calendario;
