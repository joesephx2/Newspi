import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation';
import ReadingList from './Components/ReadingList';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <h1>Newspi</h1>
      
       <Navigation />

    </div>
  );
}

export default App;
