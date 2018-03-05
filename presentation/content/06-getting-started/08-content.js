import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

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
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                Crear instaladores {"->"} 
                <span style={{ color: "#9EE9F8" }}>electron-packager | electron-builder | electron-forge
                </span>
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                Debugging {"->"} 
                <span style={{ color: "#9EE9F8" }}>devtron | electron-devtools-installer 
                </span>
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                Testing {"->"} 
                <span style={{ color: "#9EE9F8" }}>spectron | electron-mocha </span>
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              Y muchas... muchas más.
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
