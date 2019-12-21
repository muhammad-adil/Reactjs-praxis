import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // BrowserRouter

// import history from "./history";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// <App />
  // {/* <Route path="/" component={App} /> */}
  // history={history}

ReactDOM.render(  
  // <BrowserRouter history={history}>
  //   <App />
  // </BrowserRouter>,

    // {/* <Route path="/" component={App} /> */}


  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
