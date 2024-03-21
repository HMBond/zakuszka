import { Title } from "solid-start";
import IconLink from "~/components/IconLink";
import zakuszkaSvg from "../assets/zakuszka-banner.svg";
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
        <IconLink
          href="https://www.instagram.com/zakuszka.live/"
          iconPath="/assets/icons/instagram.svg"
          label="Instagram"
        />
      </footer>
    </main>
  );
}
