import React, { Component } from "react";
import anime from "animejs";

import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

export const runCommunicationMethodsAnimation = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: ["#process-communication-diagram"],
    translateX: "-=200",
    scale: 0.7,
    easing: createSteppedEasing(10),
    duration: 500
  }).add({
    targets: ["#communication-desc"],
    height: [0, 600],
    easing: createSteppedEasing(10),
    duration: 500
  }).add({
    targets: [".ipcmain-text"],
    width: [0, 400],
    easing: createSteppedEasing(10),
    duration: 500
  }).add({
    targets: [".module-item"],
    opacity: [0, 1],
    easing: createSteppedEasing(3),
    duration: 600,
    loop: true
  });

  anime({
    targets: [".renderer-process-arrows"],
    opacity: 0,
    easing: createSteppedEasing(3),
    duration: 200
  });
  anime({
    targets: [".arrow-down", ".arrow-up", ".arrow-right"],
    translateX: "+=100",
    easing: createSteppedEasing(10),
    duration: 1000,
    loop: true
  });
  anime({
    targets: [".x-mark"],
    opacity: [0, 0.8],
    easing: createSteppedEasing(1),
    duration: 600,
    loop: true
  });
};

export class GettingStarted6 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Comunicación entre procesos</Text>
        <div style={style.content}>
          <div id="process-communication-diagram" style={{ ...style.content, margin: 0 }}>
            <div id="main-process-icon" style={style.mainProcess}>
              <div style={{ display: "flex" }}>
                <div>
                  <Bullet type="window" size={80} color="#9EE9F8" />
                  <Text style={{ margin: 0 }} textFont="secondary" textColor="tertiary">
                    <small>{"{main.js}"}</small>
                  </Text>
                  <div className="main-process-arrows" style={{ display: "flex", height: 50, margin: 10, overflow: "hidden" }}>
                    <div style={style.arrowDown}>
                      <div className="arrow-down">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                    <div style={style.arrowUp}>
                      <div className="arrow-up">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  marginLeft: 20,
                  justifyContent: "center"
                }}
                >
                  <div style={{ overflow: "hidden", marginRight: 20, paddingTop: 20 }}>
                    <div className="arrow-right">
                      <Bullet type="arrow" size={40} color="#9EE9F8" />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Bullet type="computer" size={80} color="#9EE9F8" />
                    <Text style={{ margin: 0 }} textFont="secondary" textColor="tertiary">
                      <small>OS</small>
                    </Text>
                  </div>
                </div>
              </div>

            </div>
            <div id="renderers-container" style={style.defaultContainer}>
              <div id="renderers-elements" style={{ display: "flex" }} >
                <div style={style.rendererItem}>
                  <Bullet type="file" size={80} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" size={10}>
                    {"<html>"}
                  </Text>
                </div>
                <div className="renderer-process-arrows" style={{ margin: 10, position: "relative" }}>
                  <Bullet type="arrow" size={40} color="#67B1BE" />
                  <div style={style.arrowLeft}>
                    <Bullet type="arrow" size={40} color="#67B1BE" />
                  </div>
                  <div className="x-mark" style={{ position: "absolute", top: 12 }}>
                    <Bullet type="xmark" size={60} color="#fd0000" />
                  </div>
                </div>
                <div style={style.rendererItem}>
                  <Bullet type="file" size={80} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" size={10}>
                    {"<html>"}
                  </Text>
                </div>
                <div className="renderer-process-arrows" style={{ margin: 10, position: "relative" }}>
                  <Bullet type="arrow" size={40} color="#67B1BE" />
                  <div style={style.arrowLeft}>
                    <Bullet type="arrow" size={40} color="#67B1BE" />
                  </div>
                  <div className="x-mark" style={{ position: "absolute", top: 12 }}>
                    <Bullet type="xmark" size={60} color="#fd0000" />
                  </div>
                </div>
                <div style={style.rendererItem}>
                  <Bullet type="file" size={80} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" size={10}>
                    {"<html>"}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div id="communication-desc" style={style.rightContainer}>
            <div id="communication-desc-text">
              <div className="ipcmain-text" style={{
                paddingTop: 50,
                borderBottom: "3px solid"
              }}
              >
                <div className="module-item">
                  <Bullet type="module" size={50} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={60}>
                    ipcMain
                  </Text>
                  <div className="main-process-arrows" style={{
                    display: "flex",
                    height: 50,
                    margin: 10,
                    overflow: "hidden",
                    justifyContent: "center"
                  }}
                  >
                    <div style={style.arrowDown}>
                      <div className="arrow-down">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                    <div style={style.arrowUp}>
                      <div className="arrow-up">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-item" style={{ display: "flex", paddingBottom: 50 }}>
                <div className="ipcrenderer-text" style={{ marginRight: 20 }}>
                  <div className="main-process-arrows" style={{
                    display: "flex",
                    height: 50,
                    margin: 10,
                    overflow: "hidden",
                    justifyContent: "center"
                  }}
                  >
                    <div style={style.arrowDown}>
                      <div className="arrow-down">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                    <div style={style.arrowUp}>
                      <div className="arrow-up">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                  </div>
                  <Bullet type="module" size={50} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={50}>
                    ipcRenderer
                  </Text>
                </div>
                <div className="ipcrenderer-text" style={{ marginLeft: 20 }}>
                  <div className="main-process-arrows" style={{
                    display: "flex",
                    height: 50,
                    margin: 10,
                    overflow: "hidden",
                    justifyContent: "center"
                  }}
                  >
                    <div style={style.arrowUp}>
                      <div className="arrow-up">
                        <Bullet type="arrow" size={40} color="#9EE9F8" />
                      </div>
                    </div>
                  </div>
                  <Bullet type="module" size={50} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={50}>
                    remote
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
