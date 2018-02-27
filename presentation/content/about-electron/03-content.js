import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import Bullet from "../../pixel-elements/bullets";
import Logo from "../../pixel-elements/logo";

const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  content: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logos: {
    display: "flex",
    marginRight: 50,
    marginLeft: 50
  },
  logoColumn: {
    display: "flex",
    flexDirection: "column"
  }
};
export default class AboutElectron3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={style.content}>
          <div style={style.logos}>
            <div style={style.logoColumn}>
              <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={30} text="SL" />
              <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={30} text="WS" />
            </div>
            <div style={style.logoColumn}>
              <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={30} text="PM" />
              <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={30} text="VS" />
            </div>
          </div>
          <div style={style.logos}>
            <Bullet type="heart" size={150} color="#bc32d4" />&nbsp;&nbsp;
            <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={30} text="EL" />
          </div>
        </div>
      </div>
    );
  }
}
