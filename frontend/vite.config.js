import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // Render define la variable RENDER=true automaticamente al compilar.
  // Ahi el sitio vive en la raiz del dominio, no en una subcarpeta.
  base: process.env.RENDER ? "/" : command === "build" ? "/Funeraria-Virgen-de-las-mercedes-/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
}));