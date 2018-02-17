import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Logo extends Component {
  createStyle() {
    return {
      backgroundColor: this.props.backgroundColor,
      width: this.props.size,
      height: this.props.size,
      color: this.props.textColor,
      fontSize: this.props.fontSize,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      margin: 10
    };
  }
  render() {
    return (
      <div style={this.createStyle()}>
        {this.props.text}
      </div>
    );
  }
}

Logo.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};
