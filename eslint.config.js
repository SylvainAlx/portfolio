import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["dist/**"],
    settings: {
      react: {
        version: "detect", // Auto-détection de la version de React
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["dist/**"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Désactiver la règle JSX
      "no-unsafe-finally": "off",
      "no-useless-catch": "off",
      "react/prop-types": "off",
    },
  },
];
