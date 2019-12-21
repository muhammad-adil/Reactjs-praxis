import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
// import { createBrowserHistory as createHistory } from 'history'

import logo from "./logo.svg";
import './css/App.css';

import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import PageNotFound from "./components/PageNotFound";
import FeaturedMovie from "./components/FeaturedMovie";

export default class App extends Component {
  render() {
    // eslint-disable-next-line
    // const history: History = createHistory()
    return (
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
                <Link className="nav-link" to="/featuredmovies">
                 Featured Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
            </ul>
          </header>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/featuredmovie" component={FeaturedMovie} />
              <Route strict path="/movies" component={Movies} />
              <Route strict path="/movies/:id" component={Movie} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>

    );
  }
}
