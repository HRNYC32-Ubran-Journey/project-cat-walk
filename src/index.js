import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mountNode = document.getElementById('app');
// Ignore this error, as long as you keeo this file closed the linter won't scream at you :)
ReactDOM.render(<App />, mountNode);
