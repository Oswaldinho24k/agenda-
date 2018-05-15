import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
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
                width='15%'>
                <NavLink
                    style={{ textDecoration: 'none',textAlign:'start' }}
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{fontWeight: 'bold',}}
                    exact
                    to="/agenda/dashboard">
                    <MenuItem
                        style={{color:"white", height:"50px"}}
                        primaryText="Dashboard"
                        leftIcon={<Dashboard color="white"/>}
                    />
                </NavLink>
                <NavLink
                style={{ textDecoration: 'none',textAlign:'start' }}
                onClick={this.props.toogleDrawer}
                activeClassName="selected"
                activeStyle={{fontWeight: 'bold',}}
                exact
                to="/agenda/tasks">
                <MenuItem
                    style={{color:"white", height:"50px"}}
                    primaryText="Tareas"
                    leftIcon={<NoteAdd color="white"/>}
                />
                </NavLink>

                  <NavLink
                      style={{ textDecoration: 'none',textAlign:'start' }}
                      onClick={this.props.toogleDrawer}
                      activeClassName="selected"
                      activeStyle={{fontWeight: 'bold',}}
                      exact
                      to="/agenda/meeting">
                    <MenuItem
                        style={{color:"white", height:"50px"}}
                        primaryText="Reuniones"
                        leftIcon={<Calendar color="white"/>}
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
                        style={{color:"white", height:"50px"} }
                        primaryText="Proyectos"
                        leftIcon={<Desempeno color="white"/>}
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

                        style={{color:"white", height:"50px"}}
                        primaryText="Empleados"
                        leftIcon={<Accesibility color="white"/>}
                    />
                </NavLink>}
            </Drawer>
        );
    }
}

const styles = {
    draw:{
      top:'50px',
        backgroundColor:'#425566',
        color: "white",

    },
    active:{
        backgroundColor:'$3333333',
        textAlign:'start',
        color:'white'
    }
};

export default Calendario;
