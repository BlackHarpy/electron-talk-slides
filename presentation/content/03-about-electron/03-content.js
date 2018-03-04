import React, { Component } from "react";
import { Heading } from "spectacle";

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
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    border: "3px #9EE9F8 solid"
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
            <Logo backgroundColor="#F0DB4F" textColor="black" size={180} fontSize={30} text="CR" />
            +
            <Logo backgroundColor="#F0DB4F" textColor="black" size={180} fontSize={30} text="NO" />
          </div>
          &nbsp;&nbsp;=
          &nbsp;
          <Logo backgroundColor="#9EE9F8" textColor="black" size={180} fontSize={30} text="EL" />
        </div>
      </div>
    );
  }
}
