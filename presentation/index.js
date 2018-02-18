// Import React
import React from "react";
import Title from "./content/title/01-content";
import AboutMe1 from "./content/about-me/01-content-1";
import AboutMe2 from "./content/about-me/02-content-2";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Quote,
  Slide
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
  secondary: "VT323",
  tertiary: "PokemonClassic"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["spin"]} bgColor="primary">
          <Title />
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
