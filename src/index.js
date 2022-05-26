import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home/Home'; //Note how to access the file within a file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />
);

