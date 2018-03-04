import React, { Component } from "react";
import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";

const setRendererIcons = () => {
  const icons = [];
  for (let i = 0; i < 3; i++) {
    icons.push(
      <div key={i} style={style.rendererItem}>
        <Bullet type="file" size={80} color="#9EE9F8" />
        <Text textFont="secondary" textColor="tertiary" size={10}>
          {"<html>"}
        </Text>
      </div>);
  }
  return icons;
};

export class GettingStarted5 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Creando una Aplicación Electron</Heading>
        <Text style={style.subtitle} textSize={30} textColor="additional">Comunicación entre procesos</Text>
        <div style={style.content}>
          <div style={style.mainProcess}>
            <Bullet type="window" size={80} color="#9EE9F8" />
            <Text style={{ margin: 0 }} textFont="secondary" textColor="tertiary">
              <small>{"{main.js}"}</small>
            </Text>
          </div>
          <div style={{ display: "flex", margin: 10 }}>
            <div style={style.arrowDown}>
              <Bullet type="arrow" size={40} color="#9EE9F8" />
            </div>
            <div style={style.arrowUp}>
              <Bullet type="arrow" size={40} color="#9EE9F8" />
            </div>
          </div>
          
          <div style={style.defaultContainer}>
            {setRendererIcons()}
          </div>
        </div>
      </div>
    );
  }
}
