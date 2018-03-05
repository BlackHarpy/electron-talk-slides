import React, { Component } from "react";
import { Heading } from "spectacle";

import { style } from "../../styles/custom-styles";

import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runInterestingLinksAnimation = () => {
  anime({
    targets: "#main-content",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
  });
};

export class Why1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Por qué usar (o no) Electron</Heading>
        <div id="main-content" style={{ ...style.content, alignItems: "flex-start", marginTop: 100 }}>
          <img src="./assets/roast-1.png" />
          <img src="./assets/roast-2.png" />
          <img src="./assets/roast-4.png" />
          <img src="./assets/roast-5.png" />
        </div>
      </div>
    );
  }
}
