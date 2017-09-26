// console.log("It works, React works!!!!");
import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Header } from "./components/Header";

class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["sports", "Driving", "Love"]
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Welcome To The React World!</h1>
            {/* <Home /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"MaXx"} initialAge={20} user={user}>
              <p>this is a paragraph</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
