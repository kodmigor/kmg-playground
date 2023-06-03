import react from "@vitejs/plugin-react";
import { UserConfigFn } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const config: UserConfigFn = ({ command, mode }) => {
  return {
    root: "./src/app/index",

    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: "Vite + React + TS",
          },
        },
      }),
    ],
  };
};

export default config;
