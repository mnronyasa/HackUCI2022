import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,


  document.getElementById('root')
);