import React, { Component } from "react";
import { Text } from "spectacle";

import Bullet from "../pixel-elements/bullets";
import Logo from "../pixel-elements/logo";

export default class AboutMe2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <Text textFont="primary" textColor="tertiary">
            <span style={{ fontSize: 80 }}>I</span> <Bullet type="heart" size={80} color="#bc32d4" />
            &nbsp;
          </Text>
        </div>
        <Logo backgroundColor="#F0DB4F" textColor="black" size={120} fontSize={50} text="JS" />
      </div>
    );
  }
}
