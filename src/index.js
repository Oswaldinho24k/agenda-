import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import './index.css';
import {checkIfUser} from "./redux/actions/userActions";

export const store = configureStore();
store.dispatch(checkIfUser());

<<<<<<< HEAD
=======
const Main = () => (
    <MuiThemeProvider>
        <ReduxProvider/>
    </MuiThemeProvider>
);


>>>>>>> e7abebb1acce4083103d223f82ba9bb222e21736
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
