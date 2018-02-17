import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Bullet extends Component {
  createStyle() {
    const style = {
      fontFamily: "pixelDingbats"
    };
    if (this.props.color) {
      style.color = this.props.color;
    }
    if (this.props.size) {
      style.fontSize = this.props.size;
    }
    return style;
  }
  setBullet() {
    const handler = {
      circle1: "À",
      diamond: "^"
    };
    return handler[this.props.type];
  }
  render() {
    return (
      <span style={this.createStyle()}>{this.setBullet()}</span>
    );
  }
}

Bullet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string.isRequired
};
