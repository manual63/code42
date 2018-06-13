import React from 'react';
import ReactDOM from 'react-dom';
import MemberLayout from './components/memberLayout';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<MemberLayout />, wrapper) : false;

