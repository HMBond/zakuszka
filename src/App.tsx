import type { Component } from "solid-js";
import IconLink from "./components/IconLink";
import Agenda from "./content/agenda.md";
import Introduction from "./content/introduction.md";

const App: Component = () => {
  return (
    <main>
      <img class="banner" src="/images/zakuszka-logo-orange.svg" alt="Zakuszka" />
      <Introduction />
      <Agenda />
      <footer>
        <IconLink
          href="https://www.instagram.com/zakuszka.live/"
          iconPath="/instagram.svg"
          label="Instagram"
        />
      </footer>
    </main>
  );
};

export default App;
