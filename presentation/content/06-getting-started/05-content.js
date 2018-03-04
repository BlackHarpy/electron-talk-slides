import React, { Component } from "react";
import anime from "animejs";

import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

export const runCommunicationAnimation = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: ["#main-process-icon", "#main-process-arrows"],
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500,
    offset: "+=300"
  }).add({
    targets: "#renderers-container",
    opacity: {
      value: [0, 1],
      duration: 200
    },
    height: [0, 250],
    duration: 500,
    easing: createSteppedEasing(10)
  }).add({
    targets: ["#renderers-elements"],
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500,
    offset: "+=300"
  });

  timeline.finished.then(() => {
    anime({
      targets: ["#arrow-down", "#arrow-up"],
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
  }); 
};

export class GettingStarted5 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Comunicación entre procesos</Text>
        <div style={style.content}>
          <div id="main-process-icon" style={style.mainProcess}>
            <Bullet type="window" size={80} color="#9EE9F8" />
            <Text style={{ margin: 0 }} textFont="secondary" textColor="tertiary">
              <small>{"{main.js}"}</small>
            </Text>
          </div>
          <div id="main-process-arrows" style={{ display: "flex", height: 50, margin: 10, overflow: "hidden" }}>
            <div style={style.arrowDown}>
              <div id="arrow-down">
                <Bullet type="arrow" size={40} color="#9EE9F8" />
              </div>
            </div>
            <div style={style.arrowUp}>
              <div id="arrow-up">
                <Bullet type="arrow" size={40} color="#9EE9F8" />
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
      </div>
    );
  }
}
