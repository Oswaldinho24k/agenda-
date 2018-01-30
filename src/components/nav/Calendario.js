import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Accesibility from 'material-ui/svg-icons/action/accessibility';
import Desempeno from 'material-ui/svg-icons/editor/insert-chart';
import Calendar from 'material-ui/svg-icons/action/date-range';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
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
                {this.props.user.is_staff === false ? null :
                <NavLink
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
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{fontWeight: 'bold',}}
                    exact
                    to="/">
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Desempeño"
                        leftIcon={<Desempeno/>}
                    />
                </NavLink>
                <NavLink
                    onClick={this.props.toogleDrawer}
                    activeClassName="selected"
                    activeStyle={{fontWeight: 'bold',}}
                    exact
                    to="/">

                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Calendario"
                        leftIcon={<Calendar/>}
                    />
                </NavLink>
                  {this.props.user.is_staff === false ? null :
                    <MenuItem
                        style={active?styles.active:null}
                        primaryText="Registro"
                        leftIcon={<PersonAdd/>}
                        onClick={this.props.handleOpenCloseRegister}
                    />}

            </Drawer>
        );
    }
}

const styles = {
    draw:{
        top:'64px'
    },
    active:{
        backgroundColor:'red'
    }
};

export default Calendario;
