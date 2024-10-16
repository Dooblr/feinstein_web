import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all IP addresses
    port: 3000,
  },
  build: {
    outDir: "dist", // Build directory for Firebase
  },
  base: "/", // Ensure root deployment path
})
