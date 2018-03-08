import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import Bullet from "../../pixel-elements/bullets";

import { createSteppedEasing } from "../../utils";
import anime from "animejs";

export const startElectronFeaturesAnimation = () => {
  anime({
    targets: ["#feature-section"],
    opacity: [0, 1],
    duration: 500,
    easing: createSteppedEasing(3)
  });
};

const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    marginTop: 140,
    textAlign: "left"
  }
};
export class AboutElectron2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div id="feature-section" style={style.text}>
          <Text textFont="secondary" textColor="tertiary" textSize={50}>
            <Bullet type="home" size={40} color="#9EE9F8" /> Implementación de funciones nativas
          </Text>
          <Text textFont="secondary" textColor="tertiary" textSize={50}>
            <Bullet type="sword" size={40} color="#9EE9F8" /> Herramientas de debugging</Text>
          <Text textFont="secondary" textColor="tertiary" textSize={50}>
            <Bullet type="module" size={40} color="#9EE9F8" /> Generación de Ejecutables
          </Text>
        </div>
      </div>
    );
  }
}
