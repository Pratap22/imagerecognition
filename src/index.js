import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker.js';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();