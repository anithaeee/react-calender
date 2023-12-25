import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import './forms/child.css';
import Child from './forms/Child';
import { Calendar } from 'primereact/calendar';
function App() {
  return (
    <div className="App">
        <Child />
    </div>
  );
}

export default App;
