import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
        <div className="App">
            <div className="App-body">
                <header className="header">
                    <h1>Rodolfo Jaspe</h1>
                    <div className="header-nav">
                        <Link to="/">Home</Link>
                        <Link to= "/projects">Projects</Link>
                        <Link to="/about">About Me</Link>
                    </div>
               
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
            </div>
        </div>
  );
}

export default App;
