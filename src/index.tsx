import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/header/App';
import Quiz from './components/quiz';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    <Header />
    <Quiz />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();;
