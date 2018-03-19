import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
<Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>,
document.getElementById('root'));
registerServiceWorker();
