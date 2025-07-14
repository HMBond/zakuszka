import type { Component } from "solid-js";
import zakuszkaSvg from "./assets/zakuszka-banner.svg";
import IconLink from "./components/IconLink";
import Agenda from "./content/agenda.md";
import Introduction from "./content/introduction.md";

const App: Component = () => {
  if (typeof window !== "undefined") {
    function parallaxEffect() {
      (
        document.querySelector("body") as HTMLBodyElement
      ).style.backgroundPositionY = `-${window.scrollY * 0.3}px`;
    }
    document.addEventListener("scroll", parallaxEffect);
  }

  return (
    <main>
      <img class="banner" src={zakuszkaSvg} alt="Zakuszka Live" />
      <Introduction />
      <Agenda />
      <footer>
        <IconLink
          href="https://www.instagram.com/zakuszka.live/"
          iconPath="/assets/icons/instagram.svg"
          label="Instagram"
        />
      </footer>
    </main>
  );
};

export default App;
