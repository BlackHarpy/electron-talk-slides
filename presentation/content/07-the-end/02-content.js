import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

import anime from "animejs";

function randomBetween(start, end) {
  return Math.floor(Math.random() * end) + start;
}
export const runThankYouAnimation = () => {
  anime({
    targets: "#thank-you",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
  })
  anime({
    targets: "#bullet-1",
    scale: [1, 1.5],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true
  });

  anime({
    targets: "#bullet-2",
    scale: [1, 1.8],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true,
    offset: 300
  });

  anime({
    targets: "#bullet-3",
    scale: [1, 1.3],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true,
    offset: 500
  });

  anime({
    targets: "#bullet-4",
    scale: [0.8, 1.2],
    easing: createSteppedEasing(5),
    duration: 400,
    loop: true,
    offset: 400
  });

  anime({
    targets: "#bullet-5",
    scale: [0.5, 1.1],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true,
    offset: 100
  });

  anime({
    targets: "#bullet-6",
    scale: [0.5, 1.1],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true,
    offset: 100
  });

  anime({
    targets: "#bullet-7",
    scale: [0.8, 1.4],
    easing: createSteppedEasing(5),
    duration: 500,
    loop: true,
    offset: 100
  });

};

const slideTools = {
  marginTop: 200,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%"
};

export class TheEnd2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ ...style.main, marginTop: 100 }}>
        <Heading size={6} textColor="primary" fill fit>¡Gracias!</Heading>
          <div id="bullet-1" style={{ position: "absolute", top: -45, left: -20}}>
            <Bullet type="diamond" size={50} color="#3258d4" />
          </div>
          <div id="bullet-2" style={{ position: "absolute" }}>
            <Bullet type="diamond" size={50} color="#8809ef" />
          </div>
          <div id="bullet-3" style={{ position: "absolute", top: -76, right: 342 }}>
            <Bullet type="diamond" size={50} color="#0b6f1f" />
          </div>
          <div id="bullet-4" style={{ position: "absolute", left: 0 }}>
            <Bullet type="shine" size={50} color="#a6f655" />
          </div>
          <div id="bullet-5" style={{ position: "absolute", top: 362, right: -31 }}>
            <Bullet type="shine" size={50} color="#d43232" />
          </div>
          <div id="bullet-6" style={{ position: "absolute", top: 21, left: 305 }}>
            <Bullet type="shine" size={50} color="#09e#916" />
          </div>
        <div id="bullet-7" style={{ position: "absolute", top: 60, right: -31 }}>
          <Bullet type="shine" size={50} color="#ea7cfd" />
        </div>
        <div id="thank-you" style={slideTools}>
          <div style={{ display: "flex" }}>
            <Text textFont="secondary" textColor="primary" textSize={45}>
              Slides realizadas con Spectacle &nbsp;
            </Text>
            <Bullet type="heart" size={45} color="#bc32d4" />
            <Text textFont="secondary" textColor="primary" textSize={45}>
            &nbsp; anime.js
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
