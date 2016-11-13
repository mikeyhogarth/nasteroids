import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import './styles';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
