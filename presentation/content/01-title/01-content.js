import React, { Component } from "react";
import { Text } from "spectacle";

import anime from "animejs";

import { createSteppedEasing } from "../../utils";
import { style } from "../../styles/custom-styles";

import electronLogo from "../../../assets/logos/electron.png";
import twitterLogo from "../../../assets/logos/twitter.png";
import githubLogo from "../../../assets/logos/github.png";
import redditLogo from "../../../assets/logos/reddit.png";


export const titleAnimation = () => {

  const timeline = anime.timeline();
  
  timeline.add({
    targets: ["#main-title-container"],
    opacity: [0, 1],
    easing: createSteppedEasing(3),
    duration: 200,
    offset: "+=2000"
  }).add({
    targets: ["#main-title-container"],
    height: [0, 626],
    easing: createSteppedEasing(15),
    duration: 1000
  }).add({
    targets: "#first-text",
    opacity: [0, 1],
    duration: 300,
    easing: createSteppedEasing(5)
  }).add({
    targets: "#first-text",
    width: [0, 500],
    duration: 1800,
    easing: createSteppedEasing(20)
  }).add({
    targets: "#first-text",
    width: 0,
    duration: 1200,
    easing: createSteppedEasing(20),
    offset: "+=500"
  }).add({
    targets: "#first-text",
    opacity: [1, 0],
    easing: createSteppedEasing(3),
    duration: 100
  }).add({
    targets: "#final-text",
    opacity: [0, 1],
    duration: 100,
    easing: createSteppedEasing(10)
  }).add({
    targets: "#final-text",
    width: [0, 780],
    duration: 1800,
    easing:  createSteppedEasing(20)
  }).add({
    targets: "#main-title",
    opacity: [0, 1],
    translateY: ["-=80", 0],
    duration: 800,
    easing: createSteppedEasing(5)
  }).add({
    targets: "#author-section",
    opacity: [0, 1],
    duration: 500,
    easing: createSteppedEasing(5),
    offset: "+=500"
  });
};

export class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="main-title-container" style={{ padding: 40, border: "5px dashed" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div id="first-text" style={{ ...style.fileNameText, position: "relative", top: 10, textAlign: "center" }}>
            <Text textColor="tertiary" textFont="secondary" textSize={40}>
              Consumiendo mi memoria RAM con
            </Text>
          </div>
          <div id="final-text" style={{ ...style.fileNameText, marginTop: 9, marginBottom: 0 }}>
            <Text textColor="tertiary" textFont="secondary" textSize={39}>
              Construyendo Aplicaciones Web para Escritorio con
            </Text>
          </div>
        </div>

        <div id="main-title" style={{ display: "flex" }}>
          <Text textColor="secondary" textFont="tertiary" textSize={60}>
            <img style={{ ...style.pixelImage, height: 100, marginBottom: -18 }} src={electronLogo} />
            ELECTRON
          </Text>
        </div>
        <div id="author-section">
          <Text textColor="tertiary" textFont="secondary" size={5} margin={70}>
            Por María Castro
          </Text>
          <Text textColor="secondary" textFont="secondary" size={5}>
            @BlackHarpy
          </Text>
          <div style={{ marginTop: 40 }}>
            <a href="https://twitter.com/BlackHarpy" target="_blank"><img style={style.pixelImage} src={twitterLogo} /></a>
            <a href="https://github.com/BlackHarpy" target="_blank"><img style={style.pixelImage} src={githubLogo} /></a>
            <a href="https://www.reddit.com/user/BlackHarpy/" target="_blank"><img style={style.pixelImage} src={redditLogo} /></a>
          </div>
        </div>
       
      </div>
    );
  }
}
