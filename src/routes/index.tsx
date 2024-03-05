import { A } from "@solidjs/router";
import { Title } from "solid-start";
import bandImage from "../../public/assets/zakuszka-band-pic.jpg";
import zakuszkaSvg from "../../public/assets/zakuszka-banner.svg";
import Agenda from "../content/agenda.md";
import Introduction from "../content/introduction.md";

export default function Home() {
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
      <Title>Zakuszka</Title>
      <img class="banner" src={zakuszkaSvg} alt="Zakuszka Live" />
      <Introduction />
      <Agenda />
      <footer>
        <img src={bandImage} alt="Band members group photo" />
        Get in <A href="/contact">contact</A> with us!
      </footer>
    </main>
  );
}
