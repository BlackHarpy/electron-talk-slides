// Import React
import React from "react";
import AboutMe1 from "./content/01-about-me-1";
import AboutMe2 from "./content/02-about-me-2";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#10162A",
  secondary: "#9EE9F8",
  tertiary: "#2BA2DA",
  quarternary: "#CECECE"
}, {
  primary: "'Press Start 2P'",
  secondary: "VT323"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["spin"]} bgColor="primary">
          <Text textColor="tertiary" textFont="secondary" size={5} fit fill>
            <s type="strikethrough"> Consumiendo mi memoria RAM con </s>
          </Text>
          {/* <Text textColor="tertiary" textFont="secondary" size={5} fit fill>
            <s type="strikethrough"> Construyendo Aplicaciones Web para Escritorio con </s>
          </Text> */}
          <Heading size={3} lineHeight={1} caps textColor="secondary">
            Electron
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <AboutMe1 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <AboutMe2 />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
