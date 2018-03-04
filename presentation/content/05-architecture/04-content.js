import React, { Component } from "react";
import { Heading, Text } from "spectacle";
import { style } from "../../styles/custom-styles";

import { makeBulletList, createSteppedEasing } from "../../utils";

import Bullet from "../../pixel-elements/bullets";
import anime from "animejs";

export const runRendererProcessAnimation = () => {
};

export class Architecture4 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.main}>
        <Heading size={6} textColor="secondary">Arquitectura</Heading>
        <div style={style.content}>
        </div>
      </div>
    );
  }
}
