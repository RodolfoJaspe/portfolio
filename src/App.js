import React from 'react';
import {Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
        <div className="App">
            <div className="App-body">
                <header className="header">
                    <h1>Rodolfo Jaspe</h1>
                    <div className="header-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to= "/projects">Projects</NavLink>
                        <NavLink to="/about">About Me</NavLink>
                    </div>
               
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" />
                        <Route path="/projects" component={Projects}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
            </div>
        </div>
  );
}

export default App;
