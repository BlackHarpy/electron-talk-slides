import React from "react";
import { Text } from "spectacle";

import anime from "animejs";

import { style } from "./styles/custom-styles";
import Bullet from "./pixel-elements/bullets";

export const createSteppedEasing = (steps) => {
  anime.easings.steppedEasing = function (progress) {
    return Math.round(progress * steps) * (1 / steps);
  };
  return "steppedEasing";
}

export const makeBulletList = (elements, buletSize = 40) => {
  return elements.map((text, index) => {
    return (
      <div style={ style.bulletListItem } key={index}>
        <Bullet type="circle1" size={buletSize} color="#9EE9F8" />
        <Text textFont="secondary" textColor="tertiary" style={{ margin: 0 }}>
          {text}
        </Text>
      </div>
    );
  });
};