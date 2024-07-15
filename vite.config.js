import { defineConfig } from "vite";
import path from "path"
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://vigilant-space-meme-x9xgp66j7492vx56-3000.app.github.dev/",
          changeOrigin: true,
          
      },
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
