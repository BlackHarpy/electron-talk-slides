import React, { Component } from "react";
import { Heading, Text, CodePane } from "spectacle";

import { style } from "../../styles/custom-styles";

import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runHTMLFileAnimation = () => {
  const timeline = anime.timeline();
  timeline.add({
    targets: "#file-text",
    width: [0, "+=240"],
    duration: 500,
    easing: createSteppedEasing(10)
  }).add({
    targets: "#node-terminal",
    height: [0, 370],
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

export class GettingStarted4 extends Component {
  constructor() {
    super();
  }
  render() {
    const customContentStyle = { ...style.content, alignItems: "flex-start" };
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Página Web</Text>
        <div style={customContentStyle}>
          <div id="file-text" style={style.fileNameText} >
            <Text textFont="secondary" textColor="additional" textSize={40} >{">"} ./index.html</Text>
          </div>
          <div id="node-terminal" style={{...style.codeParentContainer }}>
            <div id="node-terminal-code">
              <CodePane
                lang="html"
                source={require("raw-loader!./xx-code-4.example")}
                margin="20px auto"
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
