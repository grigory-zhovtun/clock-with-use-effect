import React from 'react';

import './App.css';
import Clock from "./Clock";
import AnalogClock from "./AnalogClock";

function App() {
    return (
        <div className="App">
            <Clock/>
            <AnalogClock/>
        </div>
    );
}

export default App;
