import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
function App() {
  const[data,setdata] = useState(null);
  return (
    <div className="App">
        <form>
          <label>Enter the Data:
          <Calendar value={data} onChange={(e) => setdata(e.value)} showIcon selectionMode='multiple' readOnlyInput/>
          </label>
        </form>
    </div>
  );
}

export default App;
