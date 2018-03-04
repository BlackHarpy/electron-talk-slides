import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runThankYouAnimation = () => {
  anime({
    targets: "#main-content",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
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
        <div style={slideTools}>
          <div style={{ display: "flex" }}>
            <Text textFont="secondary" textColor="primary" textSize={50}>
              Spectacle &nbsp;
            </Text>
            <Bullet type="heart" size={50} color="#bc32d4" />
            <Text textFont="secondary" textColor="primary" textSize={50}>
            &nbsp; anime.js
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
