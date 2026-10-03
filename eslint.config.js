import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  tailwind.configs.recommended,

  {
    settings: {
      tailwindcss: {
        cssConfigPath: "src/styles/global.css",
      },
    },
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "astro/no-set-html-directive": "error",
      // Class order is owned by prettier-plugin-tailwindcss. This rule does the
      // same job in ESLint with a different order, and `eslint --fix` was undoing
      // Prettier's output in lint-staged, leaving staged files unchanged.
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
