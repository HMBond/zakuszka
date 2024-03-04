import netlify from "solid-start-netlify";
import { default as solid } from "solid-start/vite";
import { defineConfig } from "vite";
import md from "vite-plugin-solid-markdown";

export default defineConfig({
  plugins: [md(), solid({ adapter: netlify(), extensions: [".mdx", ".md"] })],
});
