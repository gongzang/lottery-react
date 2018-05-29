import React from 'react';
import ReactDOM from 'react-dom';

import Reducer from './reducers/';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);

  
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App /> 
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
