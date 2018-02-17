import React, { Component } from "react";
import { Heading, Appear, Text } from "spectacle";

import Bullet from "../pixel-elements/bullets";
import Logo from "../pixel-elements/logo";

export default class AboutMe1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <Heading size={6} textColor="secondary">Sobre mí</Heading>
        <Appear>
          <div>
            <Text textFont="secondary" textColor="tertiary" fill fit>Fullstack Developer - SimpliRoute</Text>
            <Text textFont="secondary" textColor="#1c556f" textSize={70} fill fit>
              <span style={{ color: "#87BD3E" }}>Ext JS</span> <Bullet type="circle1" size={10} />
              <span style={{ color: "#DD0031" }}>AngularJS/Angular 2</span> <Bullet type="circle1" size={10} />
              <span style={{ color: "#61DAFB" }}>React</span>
            </Text>
            <Text textFont="secondary" textColor="#1c556f" textSize={70}>
              <span style={{ color: "#41B883" }}>Vue.js</span> <Bullet type="circle1" size={40} />
              <span style={{ color: "#026E00" }}>Node.js</span> <Bullet type="circle1" size={40} />
              <span style={{ color: "#FDD94E" }}>Phaser</span>
            </Text>
          </div>
        </Appear>
        <br />
        <Appear>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Logo backgroundColor="#F0DB4F" textColor="black" size={100} fontSize={40} text="JS" />
            <Logo backgroundColor="#007ACC" textColor="white" size={100} fontSize={40} text="TS" />
          </div>
        </Appear>
      </div>
    );
  }
}
