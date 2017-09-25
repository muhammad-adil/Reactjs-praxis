// console.log("It works, React works!!!!");

import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Hello World!</h1>
            <Home />
          </div>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
