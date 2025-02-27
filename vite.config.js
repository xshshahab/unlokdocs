import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "pdfjs-dist/build/pdf.worker.mjs": "pdfjs-dist/build/pdf.worker.min.mjs",
    },
  },
});
