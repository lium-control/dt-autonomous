import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use a relative base so the same build works for:
  // 1) https://username.github.io/
  // 2) https://username.github.io/repository-name/
  base: "./",
});
