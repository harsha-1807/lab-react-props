import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppClass from "./AppClass";
import { imageData } from './Components/DataComponents'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <App  imageData={imageData}/>   

);
