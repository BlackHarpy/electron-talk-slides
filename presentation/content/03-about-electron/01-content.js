import React, { Component } from "react";
import { Heading } from "spectacle";

import Bullet from "../../pixel-elements/bullets";
import Logo from "../../pixel-elements/logo";

import electronLogo from "../../../assets/logos/electron.png";
import htmlLogo from "../../../assets/logos/html.png";
import cssLogo from "../../../assets/logos/css.png";

import { style } from "../../styles/custom-styles";

import { createSteppedEasing } from "../../utils";
import anime from "animejs";

export const startWhatIsElectronAnimation = () => {
  anime({
    targets: ["#what-is-1", "#what-is-2"],
    opacity: [0, 1],
    duration: 500,
    easing: createSteppedEasing(3)
  });
};

export class AboutElectron1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div id="what-is-1" style={{ display: "flex", flexDirection: "column", marginTop: 50 }}>
          <img style={{ ...style.pixelImage, height: 150 }} src={electronLogo} />
          <Bullet type="window" size={80} color="#9EE9F8" />
        </div>
        <div id="what-is-2" style={{ ...style.containerBackground, display: "flex", alignItems: "center"}}>
          <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={50} text="JS" />
          &nbsp;
          +
          <img style={{ ...style.pixelImage, height: 150 }} src={htmlLogo} />
          +
          <img style={{ ...style.pixelImage, height: 150 }} src={cssLogo} />
        </div>
      </div>
    );
  }
}
