import React, { Component } from "react";
import { Heading, Text, CodePane } from "spectacle";

import { style } from "../../styles/custom-styles";

import { createSteppedEasing } from "../../utils";

import Bullet from "../../pixel-elements/bullets";
import anime from "animejs";

const slideStyle = {
  subtitle: {
    marginTop: 30
  }
};


export const runInstallingElectronAnimation = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: "#file-text",
    width: [0, "+=300"],
    duration: 500,
    easing: createSteppedEasing(10)
  }).add({
    targets: "#node-terminal",
    height: [0, 300],
    duration: 500,
    easing: createSteppedEasing(10)
  }).add({
    targets: "#node-terminal-code",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500,
    offset: "+=300"
  });

};

export class GettingStarted1 extends Component {
  constructor() {
    super();
  }
  render() {
    const customContentStyle = { ...style.content, alignItems: "flex-start" }
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Creando una Aplicación Electron</Heading>
        <Text style={slideStyle.subtitle} textSize={40} textColor="additional">Cómo empezar</Text>
        <div style={customContentStyle}>
          <div id="file-text" style={style.fileNameText} >
            <Text textFont="secondary" textColor="additional" textSize={40} >{">"} Terminal de Node</Text>
          </div>
          <div id="node-terminal" style={style.defaultContainer}>
            <div id="node-terminal-code">
              <CodePane
                lang="javascript"
                source={require("raw-loader!./xx-code-1.example")}
                margin="20px auto"
                overflow="hidden"
                theme="external"
                style={style.codeContainer}
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}
