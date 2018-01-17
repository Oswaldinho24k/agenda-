import React, {Component} from 'react';
import Routes from './Routes';
import './App.css';
// import NavBar from "./components/nav/Navbar";


class App extends Component {
    // <NavBar openDrawer={this.openDrawer}/>
    // <Calendario open={this.state.showDrawer} toogleDrawer={this.openDrawer}/>

    render() {
        return (
            <div className="App">
                <div className="Rutes">
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
