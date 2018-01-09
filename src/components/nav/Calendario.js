import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import {NavLink} from 'react-router-dom';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Accesibility from 'material-ui/svg-icons/action/accessibility';
import Desempeno from 'material-ui/svg-icons/editor/insert-chart';
import Calendar from 'material-ui/svg-icons/action/date-range';


class Calendario extends Component{

    constructor(props) {
        super(props);
        this.state = {open: false};
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
                to="/">
                <MenuItem
                    style={active?styles.active:null}
                    primaryText="Tareas"
                    leftIcon={<NoteAdd/>}
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
                        primaryText="Empleados"
                        leftIcon={<Accesibility/>}
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