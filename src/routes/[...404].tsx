import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Not Found</h1>
      <p>
        Please go back to{" "}
        <a href="https://zakuszka.netlify.app/" target="_blank">
          https://zakuszka.netlify.app/
        </a>
      </p>
    </main>
  );
}
