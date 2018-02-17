import React, { Component } from "react";
import { Heading, List, ListItem, Appear } from "spectacle";

export default class Interactive extends Component {
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
        <List textFont="secondary" lineHeight={1}>
          <ListItem textSize={50}>Fullstack Developer - SimpliRoute
            <Appear>
              <List>
                <ListItem>ExtJS</ListItem>
                <ListItem>AngularJS/Angular 2</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Node</ListItem>
              </List>
            </Appear>
          </ListItem>
        </List>
      </div>
    );
  }
}
