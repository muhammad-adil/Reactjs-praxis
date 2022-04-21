import { useRef, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { gsap, Power3, TimelineMax } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  let linkItem = useRef(null);

  // Circle animations
  const [circleState, setCircleState] = useState(false);
  const tl1 = new TimelineMax();
  let circleBoxVisible = useRef(null);
  let circleYellow = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let circleGreen = useRef(null);

  const handleExpand = () => {
    gsap.to(circleRed, {
      width: 200,
      height: 200,
      ease: Power3.easeInOut
    });
    setCircleState(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed, {
      width: 75,
      height: 75,
      ease: Power3.easeInOut
    });
    setCircleState(false);
  };

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
    // Circles
    console.log(circleYellow, circleRed, circleBlue, circleGreen, "Circles");
    gsap.to(circleBoxVisible, {
      css: { visibility: "visible" },
      duration: 0
    });
    // gsap.from(circleYellow, {
    //   opacity: 0,
    //   x: 40,
    //   duration: 0.3,
    //   delay: 0.2,
    //   ease: Power3.easeOut
    // });
    // gsap.from(circleRed, {
    //   opacity: 0,
    //   x: 40,
    //   duration: 0.5,
    //   delay: 0.4,
    //   ease: Power3.easeOut
    // });
    // gsap.from(circleBlue, {
    //   opacity: 0,
    //   x: 40,
    //   duration: 0.7,
    //   delay: 0.6,
    //   ease: Power3.easeOut
    // });
    // gsap.from(circleGreen, {
    //   opacity: 0,
    //   x: 40,
    //   duration: 0.9,
    //   delay: 0.8,
    //   ease: Power3.easeOut
    // });
    // let tl1 = new TimelineMax();
    tl1.to([circleYellow, circleRed, circleBlue, circleGreen], {
      opacity: 1,
      y: 100,
      ease: Power3.easeOut,
      delay: 0.4,
      duration: 0.8
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
        <h2 style={{ display: "block", fontSize: "24px", color: "#FFF" }}>
          ScrollDown and Click on Red
        </h2>
      </header>
      <section className="circle-container">
        <div
          ref={(el) => {
            circleBoxVisible = el;
          }}
          className="circle-box-visible"
        >
          <div
            ref={(el) => {
              circleYellow = el;
            }}
            className="circle yellow"
          ></div>
          <div
            onClick={circleState !== true ? handleExpand : handleShrink}
            ref={(el) => {
              circleRed = el;
            }}
            className="circle red"
          ></div>
          <div
            ref={(el) => {
              circleBlue = el;
            }}
            className="circle blue"
          ></div>
          <div
            ref={(el) => {
              circleGreen = el;
            }}
            className="circle green"
          ></div>
        </div>
      </section>
    </div>
  );
}

export default App;
