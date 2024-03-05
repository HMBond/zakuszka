import { A } from "@solidjs/router";
import { Title } from "solid-start";
import zakuszkaSvg from "../../public/assets/zakuszka-banner.svg";

export default function ContactForm() {
  return (
    <main>
      <Title>Zakuszka - Contact</Title>
      <img class="banner-small" src={zakuszkaSvg} alt="Zakuszka Live" />
      <div class="card">
        Please send and email to{" "}
        <a href="mailto:kweesie@hotmail.com" target="_blank">
          kweesie@hotmail.com
        </a>
        <hr />
        <p>Or use the form below</p>
        <form
          action="mailto:kweesie@hotmail.com"
          method="get"
          enctype="text/plain"
          target="_blank"
        >
          <label>
            Subject
            <input name="subject" type="text" placeholder="Hi Zakuszka!" />
          </label>
          <label>
            Message
            <textarea name="body" />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
      <footer>
        Back to <A href="/">Zakuszka.live</A>
      </footer>
    </main>
  );
}
