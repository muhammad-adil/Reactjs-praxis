import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom"; // BrowserRouter

// import history from "./history";

import './css/index.css'
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

// <App />
// history={history}

ReactDOM.render(  
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
// const AppContainer = () => (
//   <Router history={history}>
//       <Provider store={store}>
//            <Route path="/" component={App} />
//       </Provider>
//   </Router>
// );
registerServiceWorker();
