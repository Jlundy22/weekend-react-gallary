import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header.jsx'

function App() {
    return (
      <div className="App">
        < Header />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
