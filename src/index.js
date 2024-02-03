import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
// import HelloWorld from './helloWord/HelloWorld';
import Todoliste from './myTodo/Todoliste';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruitsArray =['ananas','banana']
root.render(
  <React.StrictMode>
    {/* <Counter></Counter> */}
 {/* <Auth isLogged={false}></Auth> */}
    {/* <ProductList></ProductList> */}
    {/* <Fruit></Fruit> */}
    <Todoliste/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
