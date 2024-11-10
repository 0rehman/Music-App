import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Use the native path module in Vite

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Correct usage of path.resolve
    },
  },
});
