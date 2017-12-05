import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter} from 'react-router-dom';





const WithRouter = () => (

    <BrowserRouter>
        <App />
    </BrowserRouter>


);

const Main = ()=>(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <WithRouter/>
        </Provider>
    </MuiThemeProvider>
);
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

