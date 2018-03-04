import React, { Component } from "react";
import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";

import { makeBulletList, createSteppedEasing } from "../../utils";

import Bullet from "../../pixel-elements/bullets";
import anime from "animejs";

export const runRendererProcessAnimation = () => {
};

const mainContainerStyle = {
  backgroundColor: "#0d2f3f",
  padding: 20,
  margin: "0 10px"
}

export class Architecture4 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Arquitectura</Heading>
        <div style={style.content}>
          <div style={{ ...style.defaultContainer, width: 700, height: 550, flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <div style={mainContainerStyle} id="main-process-api">
                <div style={{ ...style.mainProcess, borderBottom: "3px dotted #9EE9F8" }} id="main-process">
                  <Bullet type="window" size={60} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={30}>
                    Main Process
                  </Text>
                </div>
                <div >
                  <Text textFont="secondary" textColor="tertiary" textSize={25}>
                    app<br />BrowserWindow<br />dialog<br />icpMain<br />Menu<br />
                    MenuItem<br />Notification<br />session<br />Tray<br />...
                  </Text>
                </div>
              </div>
              <div style={{ 
                ...mainContainerStyle,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center" }}
                id="main-process-api"
              >
                <div style={{ ...style.mainProcess, borderBottom: "3px dotted #9EE9F8" }} id="main-process">
                  <Bullet type="window" size={60} color="#9EE9F8" />
                  <Bullet type="file" size={60} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={30}>
                    Ambos Procesos
                  </Text>
                </div>
                <div >
                  <Text textFont="secondary" textColor="tertiary" textSize={25}>
                    clipboard<br />crashReporter<br />Variables de Entorno<br />process<br />screen<br />
                    shell<br />...
                  </Text>
                </div>
              </div>
              <div style={mainContainerStyle} id="main-process-api">
                <div style={{ ...style.mainProcess, borderBottom: "3px dotted #9EE9F8" }} id="main-process">
                  <Bullet type="file" size={60} color="#9EE9F8" />
                  <Text textFont="secondary" textColor="tertiary" textSize={30}>
                    Renderer Process
                  </Text>
                </div>
                <div >
                  <Text textFont="secondary" textColor="tertiary" textSize={25}>
                    app<br />desktopCapturer<br />ipcRenderer<br />remote<br />webFrame<br />...
                  </Text>
                </div>
              </div>
            </div>
           
            <Text textFont="secondary" textColor="tertiary">
              Node.js
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
