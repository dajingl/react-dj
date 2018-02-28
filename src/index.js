import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router';
import store from './store/store';
import './index.less';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
         <Routes/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
