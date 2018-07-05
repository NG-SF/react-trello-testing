import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Header from './components/header';
import './index.css';
import 'raf/polyfill';

ReactDOM.render(
  <div>
    <Header />
    <Board />
  </div>,
  document.getElementById('root')
);
