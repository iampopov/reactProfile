import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      
    </div>
    </Router>
  );
}

export default App;
