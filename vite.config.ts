import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isLibraryBuild = process.env.BUILD_TARGET === "lib";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: isLibraryBuild
    ? {
        outDir: "dist/lib",
        emptyOutDir: true,

        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "EaseUI",
          fileName: (format) => `easeui.${format}.js`,
        },

        cssCodeSplit: false,

        rollupOptions: {
          external: ["react", "react-dom"],

          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      }
    : {
        outDir: "dist/web",
        emptyOutDir: true,
      },
});