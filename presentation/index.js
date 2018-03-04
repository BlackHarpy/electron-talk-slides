// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

import Title from "./content/01-title/01-content";
import AboutMe1 from "./content/02-about-me/01-content-1";
import AboutMe2 from "./content/02-about-me/02-content-2";
import AboutElectron1 from "./content/03-about-electron/01-content";
import AboutElectron2 from "./content/03-about-electron/02-content";
import AboutElectron3 from "./content/03-about-electron/03-content";
import AboutElectron4 from "./content/03-about-electron/04-content";

import Architecture1 from "./content/05-architecture/01-content";
import { Architecture2, runMainProcessAnimation } from "./content/05-architecture/02-content";
import { Architecture3, runRendererProcessAnimation } from "./content/05-architecture/03-content";
import { Architecture4 } from "./content/05-architecture/04-content";

import { GettingStarted1 } from "./content/06-getting-started/01-content"

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
  quarternary: "#9EE9F8",
  additional: "#67B1BE"
}, {
    primary: "'Press Start 2P'",
    secondary: "VT323",
    tertiary: "PokemonClassic"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} transitionDuration={2000}>
          <Title />
        </Slide>
        <Slide transitionIn={["slide"]} transitionOut={["fade"]}>
          <AboutMe1 />
        </Slide>
        <Slide>
          <AboutMe2 />
        </Slide>
        <Slide transitionIn={["slide"]} transitionOut={["fade"]}>
          <AboutElectron1 />
        </Slide>
        <Slide>
          <AboutElectron2 />
        </Slide>
        <Slide>
          <AboutElectron3 />
        </Slide>
        <Slide>
          <AboutElectron4 />
        </Slide>
        <Slide transitionOut={["none"]} align="center flex-start">
          <Architecture1 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" transition={["none"]} align="center flex-start"
          onActive={runMainProcessAnimation}
        >
          <Architecture2 />
        </Slide>
        <Slide transition={["none"]} align="center flex-start"
          onActive={runRendererProcessAnimation}
        >
          <Architecture3 />
        </Slide>
        <Slide transition={["fade"]} align="center flex-start">
          <Architecture4 />
        </Slide>
        <Slide align="center flex-start">
          <GettingStarted1 />
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
