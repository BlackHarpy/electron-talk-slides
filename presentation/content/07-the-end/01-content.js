import React, { Component } from "react";
import { Heading } from "spectacle";

import { style } from "../../styles/custom-styles";

import { makeBulletList, createSteppedEasing } from "../../utils";

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
        {makeBulletList([
          <span>
            Página oficial de 
            <a style={style.link} href="https://www.google.com" target="_blank">
              <span> Electron</span>
            </a>
          </span>,
          <span>
            <a style={style.link} href="https://www.google.com" target="_blank">
              <span>Awesome Electron </span>
            </a>
            - Repositorio de recursos
          </span>,
          <span>
            <a style={style.link} href="https://www.google.com" target="_blank">
              <span>Electron Rocks!</span>
            </a>
            - Blog con tutoriales
          </span>,
          <span>
            <a style={style.link} href="https://www.google.com" target="_blank">
              <span>PokeAPI Demo</span>
            </a>
            - Mi demo de Electron + React
          </span>
        ])}
        </div>
      </div>
    );
  }
}
