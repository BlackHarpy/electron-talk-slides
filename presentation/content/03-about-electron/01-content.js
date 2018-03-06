import React, { Component } from "react";
import { Heading } from "spectacle";

import Bullet from "../../pixel-elements/bullets";
import Logo from "../../pixel-elements/logo";

import electronLogo from "../../../assets/logos/electron.png";

import { style } from "../../styles/custom-styles";

export default class AboutElectron1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img style={{ ...style.pixelImage, height: 150 }} src={electronLogo} />
          <Bullet type="window" size={80} color="#9EE9F8" />
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={50} text="JS" />
          =
          <Logo backgroundColor="#148d26" textColor="black" size={120} fontSize={30} text="CSS" />
          =
          <Logo backgroundColor="#fc460a" textColor="black" size={120} fontSize={30} text="HTML" />
        </div>
      </div>
    );
  }
}
