import netlify from "@netlify/vite-plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import md from "vite-plugin-solid-markdown";

export default defineConfig({
  plugins: [md(), solidPlugin({ extensions: [".mdx", ".md"] }), netlify()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
