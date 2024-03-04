import { A } from "@solidjs/router";

export default function ContactForm() {
  return (
    <main>
      <h1 class="contact">Get in contact with us!</h1>
      <form
        action="mailto:ceesvdgeer@gmail.com"
        method="get"
        enctype="text/plain"
      >
        <label>
          Subject
          <input name="subject" type="text" placeholder="Hi Zakuszka!" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="example@mail.com" />
        </label>
        <label>
          Message
          <textarea name="body" />
        </label>
        <input type="submit" value="Send" />
      </form>
      <footer>
        Back to <A href="/">Zakuszka</A>
      </footer>
    </main>
  );
}
