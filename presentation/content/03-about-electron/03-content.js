import React, { Component } from "react";
import { Heading } from "spectacle";

import Logo from "../../pixel-elements/logo";

import { style } from "../../styles/custom-styles";

import electronLogo from "../../../assets/logos/electron.png";
import chromiumLogo from "../../../assets/logos/chromium.png";
import nodeLogo from "../../../assets/logos/node.png";

export default class AboutElectron3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={style.logos}>
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
