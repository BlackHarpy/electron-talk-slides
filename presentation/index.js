// Import React
import React from "react";
import Title from "./content/01-title/01-content";
import AboutMe1 from "./content/02-about-me/01-content-1";
import AboutMe2 from "./content/02-about-me/02-content-2";
import AboutElectron1 from "./content/03-about-electron/01-content";
import AboutElectron2 from "./content/03-about-electron/02-content";
import AboutElectron3 from "./content/03-about-electron/03-content";
import AboutElectron4 from "./content/03-about-electron/04-content";

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
  quarternary: "#9EE9F8"
}, {
  primary: "'Press Start 2P'",
  secondary: "VT323",
  tertiary: "PokemonClassic"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} transitionDuration={2000} bgColor="primary">
          <Title />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <AboutMe1 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <AboutMe2 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" style={{ display: "flex", alignItems: "flex-start" }}>
          <AboutElectron1 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" style={{ display: "flex", alignItems: "flex-start" }}>
          <AboutElectron2 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" style={{ display: "flex", alignItems: "flex-start" }}>
          <AboutElectron3 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" style={{ display: "flex", alignItems: "flex-start" }}>
          <AboutElectron4 />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
