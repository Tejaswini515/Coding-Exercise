import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducer from './Store/reducer';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducer, composeEnhancers());

ReactDOM.render(<Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
