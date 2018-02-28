import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import {checkIfUser} from "./redux/actions/userActions";

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';


export const store = configureStore();
store.dispatch(checkIfUser());

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

const Main = () => (
    <MuiThemeProvider muiTheme={muiTheme} >
        <ReduxProvider/>
    </MuiThemeProvider>
);


const WithRouter = () => (

    <BrowserRouter>
        <Main/>
    </BrowserRouter>
);

const ReduxProvider = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
