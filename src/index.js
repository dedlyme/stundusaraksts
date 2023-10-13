import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";

const noDOM = document.getElementById("root");
const root = ReactDOM.createRoot(noDOM);
root.render(<App />);

