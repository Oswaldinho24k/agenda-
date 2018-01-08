import React, {Component} from 'react';
import Routes from './Routes';
import './App.css';
import NavBar from "./components/nav/Navbar";
import Calendario from "./components/nav/Calendario";

class App extends Component {
    state = {
        showDrawer: false
    };

    openDrawer = () => {
        let {showDrawer} = this.state;
        showDrawer = !showDrawer;
        this.setState({showDrawer})
    };


    render() {
        return (
            <div className="App">
                <NavBar openDrawer={this.openDrawer}/>
                <Calendario open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>
                <div style={this.state.showDrawer ? styles.drawer: styles.showDrawerw}>
                <Routes/>
            </div>
    </div>
    );
    }
}

const styles = {
    noDrawer:{
        paddingLeft:'3vw',
        paddingRight:'3vw',
        width: '100%'
    },
    drawer:{
        paddingLeft:'23vw',
        paddingRight:'3vw',
        width: '100%'
    }
};

export default App;
