import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HMSRoomProvider } from '@100mslive/react-sdk';

ReactDOM.render(
    <HMSRoomProvider>
    <App />
  </HMSRoomProvider>,
  document.getElementById('root')
);

reportWebVitals();
