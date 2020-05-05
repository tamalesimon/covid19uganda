import React from 'react';
//import logo from './logo.svg';
import {Cards, Chart} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid19 Uganda</h1>
        <Cards/>
        <Chart/>
        <Cards/>
      </header>
    </div>
  );
}

export default App;
