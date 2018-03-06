// Import React
import React from "react";
import "./styles/code-theme.css";

import { Title, titleAnimation } from "./content/01-title/01-content";
import AboutMe1 from "./content/02-about-me/01-content-1";
import AboutMe2 from "./content/02-about-me/02-content-2";
import AboutElectron1 from "./content/03-about-electron/01-content";
import AboutElectron2 from "./content/03-about-electron/02-content";
import AboutElectron3 from "./content/03-about-electron/03-content";
import AboutElectron4 from "./content/03-about-electron/04-content";

import { Why1 } from "./content/04-why/01-content";

import Architecture1 from "./content/05-architecture/01-content";
import { Architecture2, runMainProcessAnimation } from "./content/05-architecture/02-content";
import { Architecture3, runRendererProcessAnimation } from "./content/05-architecture/03-content";
import { Architecture4 } from "./content/05-architecture/04-content";

import { GettingStarted1, runInstallingElectronAnimation } from "./content/06-getting-started/01-content";
import { GettingStarted2, runPackageJsonAnimation } from "./content/06-getting-started/02-content";
import { GettingStarted3, runMainFileAnimation } from "./content/06-getting-started/03-content";
import { GettingStarted4, runHTMLFileAnimation } from "./content/06-getting-started/04-content";
import { GettingStarted5, runCommunicationAnimation } from "./content/06-getting-started/05-content";
import { GettingStarted6, runCommunicationMethodsAnimation } from "./content/06-getting-started/06-content";
import { GettingStarted7, runDistributingAnimation } from "./content/06-getting-started/07-content";
import { GettingStarted8, runPackagesAnimation } from "./content/06-getting-started/08-content";

import { TheEnd1, runInterestingLinksAnimation } from "./content/07-the-end/01-content";
import { TheEnd2, runThankYouAnimation } from "./content/07-the-end/02-content";

// Import Spectacle Core tags

import {
  Deck,
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
      <Deck transition={["none"]} transitionDuration={500} theme={theme}>
        <Slide transitionDuration={2000} onActive={titleAnimation}>
          <Title />
        </Slide>
        <Slide align="center flex-start">
          <AboutMe1 />
        </Slide>
        <Slide>
          <AboutMe2 />
        </Slide>
        <Slide align="center flex-start">
          <AboutElectron1 />
        </Slide>
        <Slide align="center flex-start">
          <AboutElectron2 />
        </Slide>
        <Slide align="center flex-start">
          <AboutElectron3 />
        </Slide>
        <Slide align="center flex-start">
          <AboutElectron4 />
        </Slide>
        <Slide align="center flex-start">
          <Why1 />
        </Slide>
        <Slide align="center flex-start">
          <Architecture1 />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" align="center flex-start"
          onActive={runMainProcessAnimation}
        >
          <Architecture2 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runRendererProcessAnimation}
        >
          <Architecture3 />
        </Slide>
        <Slide align="center flex-start">
          <Architecture4 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runInstallingElectronAnimation}
        >
          <GettingStarted1 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runPackageJsonAnimation}
        >
          <GettingStarted2 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runMainFileAnimation}
        >
          <GettingStarted3 />
        </Slide>
        <Slide align="center flex-start" 
          onActive={runHTMLFileAnimation}
        >
          <GettingStarted4 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runCommunicationAnimation}
        >
          <GettingStarted5 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runCommunicationMethodsAnimation}
        >
          <GettingStarted6 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runDistributingAnimation}
        >
          <GettingStarted7 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runPackagesAnimation}
        >
          <GettingStarted8 />
        </Slide>
        <Slide align="center flex-start"
          onActive={runInterestingLinksAnimation}
        >
          <TheEnd1 />
        </Slide>
        <Slide bgColor="additional"
          onActive={runThankYouAnimation}
        >
          <TheEnd2 />
        </Slide>
      </Deck>
    );
  }
}
