import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Array from './components/Array';
import HookFlow from './hookFlow';
import App from './App';
import RouterApp from './Router/RouterApp';
//import ArrayShuffle from './components/ArrayShuffle';
import reportWebVitals from './reportWebVitals';
import BoardGame from './BoardGame/BoardGame';
import FetchApiHook from './FetchApi/FetchApiHook';

ReactDOM.render(
  <React.StrictMode>
    {/* <RouterApp/> */}
    <FetchApiHook />
    {/* <BoardGame /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// function tick() {
//   const element = (
//     <>
//       <h1>Hello</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </>
//   )

//   ReactDOM.render(element, document.getElementById('root'))
// } 

// setInterval(tick, 1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
