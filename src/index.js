import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serviceWorkerRegistraion from './serviceWorkerRegistraion';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorkerRegistraion();
