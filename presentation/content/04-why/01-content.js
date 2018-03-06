import React, { Component } from "react";
import { Heading } from "spectacle";

import { style } from "../../styles/custom-styles";

import { createSteppedEasing } from "../../utils";

import anime from "animejs";

import roast1 from "../../../assets/roast-1.png";
import roast2 from "../../../assets/roast-2.png";
import roast3 from "../../../assets/roast-3.jpg";
import roast4 from "../../../assets/roast-4.png";
import roast5 from "../../../assets/roast-5.png";

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
          <img src={roast1}/>
          <img src={roast2}/>
          <img src={roast3}/>
          <img src={roast4}/>
          <img src={roast5}/>
        </div>
      </div>
    );
  }
}
