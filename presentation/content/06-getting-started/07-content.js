import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runDistributingAnimation = () => {
  const timeline = anime.timeline();
  anime({
    targets: ".moving-application",
    opacity: [1, 0],
    easing: createSteppedEasing(4),
    duration: 100
  });
  timeline.add({
    targets: "#distribution-desc",
    height: [0, 500],
    easing: createSteppedEasing(10),
    duration: 500,
    offset: "+=300"
  }).add({
    targets: "#computer-section",
    width: [0, 400],
    easing: createSteppedEasing(10),
    duration: 500
  }).add({
    targets: [".computer-icon", "#electron-icon", "#files-section", "#distribution-text"],
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500,
    offset: "+=300"
  });

  timeline.finished.then(() => {
    anime({
      targets: ".moving-application",
      opacity: [0, 1],
      easing: createSteppedEasing(4),
      duration: 500
    });
    anime({
      targets: ".moving-application",
      translateY: ["-=150", "0"],
      easing: createSteppedEasing(8),
      duration: 1000,
      loop: true
    });
  });
};

const customLeftColumn = {
  width: 500,
  padding: 20,
  marginRight: 20
};

const computersSection = {
  display: "flex",
  justifyContent: "space-between",
  height: 300,
  borderBottom: "3px #9EE9F8 dotted"
};

export class GettingStarted7 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Distribución</Text>
        <div style={{ ...style.content, flexDirection: "row" }}>
          <div style={customLeftColumn} id="distribution-diagram">
            <div id="computer-section" style={computersSection}>
              <div className="computer-icon">
                <Bullet type="computer" size={80} color="#8bc34a" />
                <div className="moving-application">
                  <Bullet type="application" size={40} color="#8bc34a" />
                </div>
              </div>
              <div className="computer-icon">
                <Bullet type="computer" size={80} color="#e91e63" />
                <div className="moving-application">
                  <Bullet type="application" size={40} color="#e91e63" />
                </div>
              </div>
              <div className="computer-icon">
                <Bullet type="computer" size={80} color="#ffc107" />
                <div className="moving-application">
                  <Bullet type="application" size={40} color="#ffc107" />
                </div>
              </div>

            </div>
            <div id="electron-icon" style={{ position: "relative", top: -48 }}>
              <Bullet type="module" size={70} color="#9EE9F8" />
            </div>
            <div id="files-section">
              <Bullet type="file" size={70} color="#67B1BE" />
              <Bullet type="file" size={70} color="#67B1BE" />
              <Bullet type="file" size={70} color="#67B1BE" />
            </div>
          </div>
          <div id="distribution-desc" style={{ ...style.rightContainer, position: "relative" }}>
            <div id="distribution-text">
              <div style={ style.bulletListItem }>
                <Bullet type="circle1" size={40} color="#9EE9F8" />
                <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                Descargar los binarios de Electron.
                </Text>
              </div>
              <div style={ style.bulletListItem }>
                <Bullet type="circle1" size={40} color="#9EE9F8" />
                <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                Trasladar los archivos fuentes a directorio de binarios (scripts o .asar).
                </Text>
              </div>
              <div style={ style.bulletListItem }>
                <Bullet type="circle1" size={40} color="#9EE9F8" />
                <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
                Hay paquetes de NPM que se pueden encargar de este proceso
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
