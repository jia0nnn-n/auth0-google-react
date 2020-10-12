import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as auth from './Auth'

let state = {}
let username = auth.getProfile()
let initState = {
  name: username,
  location: window.location.pathname.replace(/^\/?|\/$/g, ''),
  auth
}

window.setState = (changes) => {
  state = Object.assign({}, state, changes)
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


window.setState(initState);



serviceWorker.unregister();
