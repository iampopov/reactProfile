import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import MyForm from "./components/MyForm"
import Resume from "./components/Resume"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/resume/contact' component={MyForm} />

      <Footer />
    </div>
    </Router>
  );
}

export default App;
