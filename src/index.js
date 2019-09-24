import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/styles.scss'

import store from './redux/store';
import { Provider } from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
