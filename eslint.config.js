import js from "@eslint/js";
import globals from "globals";

export default {
  ...js.configs.recommended,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    semi: "error", // Force un point-virgule en fin de ligne
    indent: ["error", 2], // Force une indentation de 2 espaces
  },
};
