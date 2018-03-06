import React, { Component } from "react";
import { Heading, Text } from "spectacle";

import { style } from "../../styles/custom-styles";

import Bullet from "../../pixel-elements/bullets";
import { createSteppedEasing } from "../../utils";

import anime from "animejs";

export const runInterestingLinksAnimation = () => {
  anime({
    targets: "#main-content",
    opacity: [0, 1],
    easing: createSteppedEasing(4),
    duration: 500
  });
};

export class TheEnd1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary" fill fit>Enlaces interesantes</Heading>
        <div id="main-content" style={{ ...style.content, alignItems: "flex-start", marginTop: 100 }}>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
              Página oficial de 
                <a style={style.link} href="https://www.electronjs.org" target="_blank">
                  <span> Electron</span>
                </a>
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                <a style={style.link} href="https://github.com/sindresorhus/awesome-electron" target="_blank">
                  <span>Awesome Electron </span>
                </a>
                - Repositorio de recursos
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                <a style={style.link} href="http://electron.rocks/" target="_blank">
                  <span>Electron Rocks!</span>
                </a>
              - Blog con tutoriales
              </span>
            </Text>
          </div>
          <div style={style.bulletListItem}>
            <Bullet type="circle1" size={40} color="#9EE9F8" />
            <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
              <span>
                <a style={style.link} href="https://github.com/BlackHarpy/pokeapi-client" target="_blank">
                  <span>PokeAPI Demo</span>
                </a>
              - Mi demo de Electron + React
              </span>
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
