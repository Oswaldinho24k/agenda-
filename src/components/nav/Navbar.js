import React, {Component} from 'react';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {NavLink} from 'react-router-dom';
import { ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {AppBar, DropDownMenu, MenuItem, FontIcon, RaisedButton, IconMenu, IconButton, FlatButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const buttonStyle = {
    color: 'white'
};

class Navbar extends Component {


    constructor(props){
        super(props);
        this.state = {
          isUser:null,
          user:{},
        }
    }

componentWillMount(){
 this.tok();
}
tok=()=>{
  const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
  if(!userToken || userToken==undefined){
    this.setState({isUser:false});

  }
  console.log(userToken)
}

    render() {
        let {isUser} = this.state;
        console.log(isUser)
        let iconRight = null;

            if(isUser==false){
              iconRight=(
              <NavLink to='/login'>
                  <FlatButton style={buttonStyle} label="Iniciar Sesión"/>
              </NavLink>);
            }else{
              iconRight=(
              <NavLink to='/logout'>
                  <FlatButton style={buttonStyle} label="Cerrar Sesión"/>
              </NavLink>);
            }


        let iconLeft = (
            <IconButton><MenuIcon/></IconButton>
        );

        return(
            <div>
                <AppBar
                title="Agenda"
                onLeftIconButtonTouchTap = { isUser ? this.props.openDrawer : null}
                style={{top:0, position: 'fixed'}}
                iconElementRight={iconRight}
                iconElementLeft={iconLeft}
                />
            </div>
        );
    }

}

export default Navbar
