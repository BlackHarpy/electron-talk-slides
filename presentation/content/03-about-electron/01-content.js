import React, { Component } from "react";
import { Heading } from "spectacle";

import Bullet from "../../pixel-elements/bullets";
import Logo from "../../pixel-elements/logo";

const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  mainLogo: {
    marginTop: 50
  },
  secundaryLogos: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9EE9F8"
  }
};
export default class AboutElectron1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={style.mainLogo}>
          <Logo backgroundColor="#9EE9F8" textColor="black" size={120} fontSize={50} text="EL" />
          <Bullet type="window" size={80} color="#9EE9F8" />
        </div>
        <div style={style.secundaryLogos}>
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
