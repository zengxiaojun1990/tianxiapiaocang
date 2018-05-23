import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'swiper/dist/css/swiper.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './modules/rem'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
