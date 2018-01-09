import React, {Component} from 'react';
import {AppBar, FlatButton} from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import {NavLink} from 'react-router-dom';

const buttonStyle = {
    color: 'white'
};

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    render() {
        const {usuario} = this.props;
        let iconRight = (
            <NavLink to='/login'>
                <FlatButton style={buttonStyle} label="Iniciar Sesión"/>
            </NavLink>
        );
        let iconLeft = (
            <IconButton><MenuIcon/></IconButton>
        );

        return(
            <div>
                <AppBar
                title="Agenda"
                onLeftIconButtonTouchTap = { usuario ? this.props.openDrawer : null}
                style={{top:0, position: 'fixed'}}
                iconElementRight={iconRight}
                iconElementLeft={iconLeft}
                />
            </div>
        );
    }

}

export default Navbar;