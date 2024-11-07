import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1.js'
import GamePage from './GamePage.jsx';
import reportWebVitals from './reportWebVitals';

const myElement = React.createElement('h1', {}, 'I Love JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'), {
  onUncaughtError: (error, errorInfo) => {
    console.error('Uncaught error', error, errorInfo.componentStack);
    },
    onCaughtError: (error, errorInfo) => {
    console.error('Caught error', error, errorInfo.componentStack);
    },
    onRecoverableError: (error, errorInfo) => {
    console.error('Recoverable error', error, error.cause, errorInfo.componentStack);
    }
});
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
