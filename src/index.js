import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';

import createStore from './redux/create';
import App from './components/App';

import './common.scss';
import './css/global.scss';

const store = createStore();

window.store = store;

Modal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
