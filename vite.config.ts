import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    VitePluginFonts({
      google: {
        families: ["Carter One", "Montserrat", "Permanent Marker"],
      },
    }),
  ],
});
