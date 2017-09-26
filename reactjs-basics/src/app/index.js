// console.log("It works, React works!!!!");
import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["sports", "Driving", "Love"]
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 header">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-offset-1 main">
            <h1>Welcome To The React World!</h1>
            {/* <Home /> */}
            {/* </div>
        </div> 

             <div className="row">
          <div className="col-xs-10 col-xs-offset-1"> */}

            <Home name={"MaXx"} initialAge={20} initialStatus={0} user={user}>
              <p>this is a paragraph</p>
            </Home>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-offset-1 sidebar">
            <Sidebar
              name={"John"}
              initialAge={20}
              initialTime={0}
              user={user}
            />
          </div>

          <footer className="footer-m w-100">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
