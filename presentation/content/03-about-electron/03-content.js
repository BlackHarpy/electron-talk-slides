import React, { Component } from "react";
import { Heading } from "spectacle";

import { style } from "../../styles/custom-styles";

import electronLogo from "../../../assets/logos/electron.png";
import chromiumLogo from "../../../assets/logos/chromium.png";
import nodeLogo from "../../../assets/logos/node.png";
import {createSteppedEasing} from "../../utils";
import anime from "animejs";

export const startElectronEnvAnimation = () => {
  anime({
    targets: ["#electron-env"],
    opacity: [0, 1],
    duration: 500,
    easing: createSteppedEasing(3)
  });
};

export class AboutElectron3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div id="electron-env" style={style.logos}>
          <div style={{ ...style.containerBackground, display: "flex", alignItems: "center" }}>
            <img style={{ ...style.pixelImage, height: 180 }} src={chromiumLogo} />
            +
            <img style={{ ...style.pixelImage, height: 180 }} src={nodeLogo} />
          </div>
          &nbsp;&nbsp;=
          &nbsp;
          <img style={{ ...style.pixelImage, height: 250 }} src={electronLogo} />
        </div>
      </div>
    );
  }
}
