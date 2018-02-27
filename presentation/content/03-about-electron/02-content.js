import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import Bullet from "../../pixel-elements/bullets";

const style = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  text: {
    marginTop: 100,
    textAlign: "left"
  }
};
export default class AboutElectron2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Sobre Electron</Heading>
        <div style={style.text}>
          <Text textFont="secondary" textColor="tertiary">
            <Bullet type="home" size={40} color="#9EE9F8" /> Implementación de funciones nativas
          </Text>
          <Text textFont="secondary" textColor="tertiary">
            <Bullet type="sword" size={40} color="#9EE9F8" /> Herramientas de debugging</Text>
          <Text textFont="secondary" textColor="tertiary">
            <Bullet type="module" size={40} color="#9EE9F8" /> Generación de Ejecutables
          </Text>
        </div>

      </div>
    );
  }
}
