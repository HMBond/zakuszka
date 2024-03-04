import { A } from "@solidjs/router";
import { Title } from "solid-start";
import Insta from "~/components/Instagram";
import Agenda from "../content/agenda.md";
import Introduction from "../content/introduction.md";

export default function Home() {
  if (typeof window !== "undefined") {
    document.addEventListener("scroll", () => {
      (
        document.querySelector("body") as HTMLBodyElement
      ).style.backgroundPositionY = `-${window.scrollY * 0.3}px`;
    });
  }
  return (
    <main>
      <Title>Zakuszka</Title>
      <h1 class="index">Zakuszka</h1>
      <Introduction />
      <Agenda />
      <Insta />
      <footer>
        <img src="zakuszka-band-pic.jpg" alt="Zakuszka band photo" />
        Get in <A href="/contact">contact</A> with us!
      </footer>
    </main>
  );
}
