import React, { Component } from "react";
import { Heading, Text, Appear } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runGoodStuffAnimation2 = () => {
  anime({
    targets: "#main-content",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
  });
};

export class Why3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Por qué usar (o no) Electron</Heading>
        <div id="main-content" style={{ ...style.content, alignItems: "flex-start", marginTop: 100 }}>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" textSize={50} style={{ margin: 0 }}>
              Un <i>codebase</i> para múltiples plataformas.
            </Text>
          </div>
          <Appear>
            <div style={style.bulletListItem}>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" textSize={50} style={{ margin: 0 }}>
                Menos tiempo de desarrollo === mayor cantidad de <i>releases</i>
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={style.bulletListItem}>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" textSize={50} style={{ margin: 0 }}>
                JavaScript === Mejor accesibilidad de recursos de desarrollo
              </Text>
            </div>
          </Appear>
          <Appear>
            <div style={style.bulletListItem}>
              <Bullet type="circle1" size={40} color="#9EE9F8" />
              <Text textFont="secondary" textColor="tertiary" textSize={50} style={{ margin: 0 }}>
                ¿Qué estás dispuesto a sacrificar?
              </Text>
            </div>
          </Appear>
        </div>
      </div>
    );
  }
}
