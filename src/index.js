import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore();

const Main = () => (
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);


const WithRouter = () => (

    <BrowserRouter>
        <Main/>
    </BrowserRouter>
);

const ReduxProvider = () => (
    <Provider store={store}>
        <WithRouter/>
    </Provider>
);

ReactDOM.render(<ReduxProvider />, document.getElementById('root'));
registerServiceWorker();

