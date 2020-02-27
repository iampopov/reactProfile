import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={About} />
      <Route exact path='/projects' component={Projects} />
      {/* <Route exact path='/contact' component={About} /> */}

      <Footer />
    </div>
    </Router>
  );
}

export default App;
