import React, { Component } from "react";
import { Text } from "spectacle";

export default class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Text textColor="tertiary" textFont="secondary" size={5} fit fill>
          Construyendo Aplicaciones Web para Escritorio con
        </Text>
        {/* <Text textColor="tertiary" textFont="secondary" size={5} fit fill>
            <s type="strikethrough"> Consumiendo mi memoria RAM con </s>
          </Text> */}
        <Text textColor="secondary" textFont="tertiary" size={5} fit fill>
          ELECTRON
        </Text>
        <Text textColor="tertiary" textFont="secondary" size={5} margin={70}>
          Por María Castro
        </Text>
        <Text textColor="secondary" textFont="secondary" size={5}>
        @BlackHarpy
        </Text>
      </div>
    );
  }
}
