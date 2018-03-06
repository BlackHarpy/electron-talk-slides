import React, { Component } from "react";
import { Heading } from "spectacle";

import Bullet from "../../pixel-elements/bullets";
import Logo from "../../pixel-elements/logo";

import { style } from "../../styles/custom-styles";

import electronLogo from "../../../assets/logos/electron.png";
import slackLogo from "../../../assets/logos/slack.png";
import whatsappLogo from "../../../assets/logos/whatsapp.png";
import postmanLogo from "../../../assets/logos/postman.png";
import vscodeLogo from "../../../assets/logos/vscode.png";


export default class AboutElectron4 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={{ ...style.content, flexDirection: "row", marginTop: 40 }}>
          <div style={{ ...style.containerBackground, display: "flex" }}>
            <div style={style.logoColumn}>
              <img style={{ ...style.pixelImage, height: 120, margin: 10 }} src={slackLogo} />
              <img style={{ ...style.pixelImage, height: 120, margin: 10 }} src={whatsappLogo} />
            </div>
            <div style={style.logoColumn}>
              <img style={{ ...style.pixelImage, height: 120, margin: 10 }} src={postmanLogo} />
              <img style={{ ...style.pixelImage, height: 120, margin: 10 }} src={vscodeLogo} />
            </div>
          </div>
          <div style={{ ...style.logos, marginLeft: 90, marginTop: 0 }}>
            <Bullet type="heart" size={120} color="#bc32d4" />&nbsp;&nbsp;
            <img style={{ ...style.pixelImage, height: 180 }} src={electronLogo} />
            
          </div>
        </div>
      </div>
    );
  }
}
