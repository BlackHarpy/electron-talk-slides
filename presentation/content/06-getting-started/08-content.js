import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import { makeBulletList, createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runPackagesAnimation = () => {
  anime({
    targets: "#package-desc",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
  });
};

export class GettingStarted8 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Herramientas adicionales</Text>
        <div id="package-desc" style={{ ...style.content, alignItems: "flex-start", marginTop: 100 }}>
        {makeBulletList([
          <span>Crear instaladores {"->"} <span style={{ color: "#9EE9F8"}}>electron-packager | electron-builder | electron-forge</span></span>,
          <span>Debugging {"->"} <span style={{ color: "#9EE9F8"}}>devtron | electron-devtools-installer </span></span>,
          <span>Testing {"->"} <span style={{ color: "#9EE9F8"}}>spectron | electron-mocha </span></span>,
                "Y muchas... muchas más."])}
        </div>
      </div>
    );
  }
}
