import { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { gsap, Power3 } from "gsap";
// import { Tween } from "gsap/gsap-core";
function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  let linkItem = useRef(null);

  // console.log(logoItem, "logoItem");

  useEffect(() => {
    // console.log(logoItem);
    gsap.to(logoItem, {
      opacity: 1,
      duration: 2,
      y: -50,
      ease: Power3.easeOut,
      rotation: "+=360"
    });
    gsap.to(textItem, {
      opacity: 1,
      duration: 1,
      y: -25,
      ease: Power3.easeInOut,
      delay: 0.2
    });
    gsap.to(linkItem, {
      opacity: 1,
      duration: 1.2,
      y: -15,
      ease: Power3.easeout,
      delay: 0.3
    });
  }, []);

  // console.log(logoItem, "logoItem");

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={(el) => {
            logoItem = el;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p
          ref={(el) => {
            textItem = el;
          }}
          className="caption"
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          ref={(el) => {
            linkItem = el;
          }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
