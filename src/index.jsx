import React from 'react';
import ReactDOM from 'react-dom';
import Members from './components/members';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<Members />, wrapper) : false;

