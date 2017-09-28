import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Movie from "./components/Movie";
import Movies from "./components/Movies";
import PageNotFound from "./components/PageNotFound";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h1 className="App-title">Movie Routing App</h1>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Movies">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/" />
              </li>
            </ul>
          </header>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route strict path="/movies" component={Movies} />
              <Route path="/movies/:id" component={Movie} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
