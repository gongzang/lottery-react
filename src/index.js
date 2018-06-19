import React from 'react';
import ReactDOM from 'react-dom';

import Reducer from './reducers/';
import finalCreateStore from './store/configureStore'  //引入增强后的store
import { Provider } from 'react-redux';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = finalCreateStore(Reducer);

  
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App /> 
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
