import React, { Component } from "react";
import { Heading, Appear } from "spectacle";

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

const styleImg = {
  position: "absolute",
  backgroundColor: "#10162A",
  width: "100%",
  height: 480
}

export class Why1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ ...style.main, alignItems: "center" }}>
        <Heading size={6} textColor="secondary" fill fit>Por qué usar (o no) Electron</Heading>
        <div id="main-content" style={{ ...style.content, alignItems: "flex-start", marginTop: 100 }}>
          <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/eZ7aDS/roast_3.jpg" height="480" alt="roast_3" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/gxfHSn/roast1.png" height="480" alt="roast1" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/fJTCSn/roast_2.png" height="480" alt="roast_2" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/dZ06L7/roast_4.png" height="480" alt="roast_2" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/hftt07/roast_7.png" height="480" alt="roast_2" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/gELTYS/roast_6.png" height="180" alt="roast_2" border="0" />
                <img src="https://image.ibb.co/e5nLf7/roast_8.png" height="180" alt="roast_2" border="0" />
              </div>
            </Appear>
            <Appear>
              <div style={styleImg}>
                <img src="https://image.ibb.co/iafvDS/roast_9.png" height="180" alt="roast_2" border="0" />
                <img src="https://image.ibb.co/hMnaDS/roast_10.png" height="180" alt="roast_2" border="0" />
              </div>
            </Appear>
          </div>
        </div>
      </div>
    );
  }
}
