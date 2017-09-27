import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
// import Login from './components/Login';
// import PageNotFound from './components/PageNotFound';

// import Router from "react-router-dom/BrowserRouter";
//import Link from "react-router-dom/Link";
import Match from "react-router-dom/matchPath";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Movie Routing App</h1>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/movies">Movies</Link>
          </header>

          <div className="container App-intro">
            <Match exactly pattern="/" component={Home} />
            <Match exactly pattern="/movies" component={Movies} />
            <Match pattern="/movies/:movieId" component={Movie} />
          </div>
          {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        </div>
      </Router>
    );
  }
}

export default App;
